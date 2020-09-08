# Apollo Tutorial

Notes based on the Apollo tutorial starting [here](https://www.apollographql.com/docs/tutorial/introduction/)

## 1. Build a schema

Create the blueprint for the data graph

- Every data graph uses a schema to define the types of data it includes

### Set Up the Apollo Server

- A schema is only useful if the data graph conforms to the schema's structure
- Apollo Server contains a core feature that enforces a schema's structure

1. Install the Apollo Server and other dependencies. Copy the following into the command line. This will install 2 packages: `apollo-server` and `graphql`

```cli
cd start/server && npm install
```

2. Navigate to `src/index.js` to create the server and paste the folliwing into the file:
   1. This will import the `ApolloServer` class from `apollo-server`, along with the schema from `src/schema.js`
   2. It creates a new instance of `ApolloServer` and passes the imported schema via the `typeDefs` property

```javascript
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const server = new ApolloServer({ typeDefs });
```

### Define your schema's types

The GraphQL schema defines what types of data a client can read and write on the data graph.

The schema's structure should support the actions that the clients will take. For example, in the tutorial project, the app needs to be able to:

- Fetch a list of all upcoming rocket launches
- Fetch a specific launch by its ID
- Log in the user
- Book a launch for a logged-in user
- Cancel a previously booked launch for a logged-in user

1. In `src/schema.js` import `gql` from `apollo-server` and create a variable called `typeDefs` for the schema

```javascript
const { gql } = require('apollo-server');

const typeDefs = gql`
  # Your schema will go here
`;

module.exports = typeDefs;
```

- In the above example, the schema will go inside the `gql` function between the backticks <-- This is GraphQL's schema definition language (SDL)

#### Object Types

- Each object type defined should represent an object that an application client might need to interact with.
  - As an example, if the app needs to fetch a list of upcoming rocket launches, we should define a `Launch` type

1. Write something like this as a type:

```sdl
type Launch {
  id: ID!
  site: String
  mission: Mission
  rocket: Rocket
  isBooked: Boolean!
}
```

- When defining types, the object `Launch` has a collection of fields (id, site, mission, etc), and each of those fields has a type of their own.
- A field's type can either be an object type, or scalar type
- Scalar type is a primitive (like `ID`, `String`, `Boolean`, or `Int`) that resolves to a single value
- In addition to the built in salar types, custom scalar types are possible

**Note** an `!` after a declared field's type menas that the field's value cannot be null (shorthand for required field)

In the above example, `Mission` and `Rocket` referr to other object types. We must define them in a similar format:

```sdl
type Mission {
  name: String
  missionPatch(size: PatchSize): String
}

type Rocket {
  id: ID!
  name: String
  type: String
}
```

- Other types can be defined as well, such as an object `User`

```sdl
type User {
  id: ID!
  email: String!
  trips: [Launch]!
}
```

The `[Launch]!` refers to an array of the specified type.

- One more item in our example must be included:

```sdl
enum PatchSize {
  SMALL
  LARGE
}
```

The `missionPatch` field of the `Mission` type takes an argument `size`, which is of the enum type `PatchSize`.

#### The `Query` type

The schema needs to define queries that clients can execute against the data graph to fetch objects.

Define the data graph's supported queries as a special field type called `Query`

```sdl
type Query {
  launches: [Launch]!
  launch(id: ID!): Launch
  me: User
}
```

- Above, we define that users can query for `launches`(returns an array of all upcoming launches), `launch`(returns a single launch that corresponds to the id argument) and `me`(returns details for the user that is logged in)

#### The `Mutation` type

`Queries` only allow clients to fetch data, not modify data. To allow data modification, the schema needs to define `mutations`

```sdl
type Mutation {
  bookTrips(launchIds: [ID]!): TripUpdateResponse!
  cancelTrip(launchId: ID!): TripUpdateResponse!
  login(email: String): String # login token
}
```

- Above, we define that users can `bookTrips`(enables a logged in user to booka trip on one or more launches, specified by an array of launch IDs), `cancelTrip`(enables a logged in user to cancel a previously booked trip), and `login`(enables user to log in by providing an email address)
- Both `bookTrips` and `cancelTrip` return the same object type of `TripUpdateResponse`, which we also must define
**NOTE** a mutation's return type is up to you, but it is highly recommended that special object types are defined specifically for mutation purposes

```sdl
type TripUpdateResponse {
  success: Boolean!
  message: String
  launches: [Launch]
}
```

- The above contains a success status, a corresponding message and an aray of launches that were modified by the mutation.

**NOTE** it's good practice for a mutation to return the modified objects so the requesting client can update its cache and UI without needing to make a followup query

### Run the Server

In the main `index.js` file, add a call to `server.listen()`. Place this code below the defined server constant:

```javascript
server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```

**NOTE** verify you are in the correct directory before starting the server

run `npm start` or `yarn start`. This will launch your server on `localhost:4000`

#### Explore your schema

1. Visit `localhost:4000` in the browser to open GraphQL Playground
   1. GraphQL Playground is an IDE that allows you to introspect your schema and test out queries.
   2. Introspection is a feature of GraphQL server that enables you to obtain its schema
   3. Introspection should be disabled for a production GraphQL server. Apollo disables introspection automatically
2. To introspect the server's schema, click the Schema button on the right side of the playground
   1. The schema's queries, mutationsm and object type definitions appear

## 2. Connect to data sources

A data source is any database, service, or API that holds the data you use to populate your schema's fields.

Apollo provides a `DataSource` class that we can extend to handle interaction logic for a particular type of data source

### Connect a REST API

To connect a REST API:

- Use the `RESTDataSource` class from the `apollo-datasource-rest` package
  - This is an extention of `DataSource` that handles fetching data from a REST API
- `extend` the class to use it and provide the URL of the API you are connecting to

Continuing our example:

```javascript
// src/datasources/launch.js
const { RESTDataSource } = require('apollo-datasource-rest');

class LaunchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v2/';
  }
}

module.exports = LaunchAPI;

```

- In the above, we have provided the base URL for SpaceX API and created a data source called `Launch API`
- The `RESTDataSource` class automatically cahches responses from the resources with no added set up: this is called **partial query caching**

#### Write data-fetching methods

The data source needs methods that allow it to fetch the data that queries will request.

In the example, we will call the method `getAllLaunches`:

```javascript
async getAllLaunches() {
  const response = await this.get('launches');
  return Array.isArray(response)
    ? response.map(launch => this.launchReducer(launch))
    : [];
}
```

**NOTE** `RESTDataSource` provides helper methods that allows us to use HTTP verbs like `GET` and `POST`

- In the above, `this.get('launches')` sends a `GET` request to the API URL and stores the returned data array in `response`
- `this.launchReducer` is used to transform each piece of data into the format our schema expects. If there is no data, it returns an empty array

`launchReducer` method needs to be written: the following approach will decouple the structure of the schema from the structure of the different data sources that will populate its fields

Calling back to the structure of `Launch` our method should look like this:

```javascript
launchReducer(launch) {
  return {
    id: launch.flight_number || 0,
    cursor: `${launch.launch_date_unix}`,
    site: launch.launch_site && launch.launch_site.site_name,
    mission: {
      name: launch.mission_name,
      missionPatchSmall: launch.links.mission_patch_small,
      missionPatchLarge: launch.links.mission_patch,
    },
    rocket: {
      id: launch.rocket.rocket_id,
      name: launch.rocket.rocket_name,
      type: launch.rocket.rocket_type,
    },
  };
}
```

Using this reducer will allow `getAllLaunches` to remain concise as `Launch` may change over time

Next, to define the `getLaunchByID` method - previously, the queries we established will allow a client to search for a particular launch by its ID

```javascript
async getLaunchById({ launchId }) {
  const response = await this.get('launches', { flight_number: launchId });
  return this.launchReducer(response[0]);
}

getLaunchesByIds({ launchIds }) {
  return Promise.all(
    launchIds.map(launchId => this.getLaunchById({ launchId })),
  );
}
```

`getLaunchById` takes a launch's flight number and returns the data for that particular launch
`getLaunchByIds` returns the result of multible calls to `getLaunchById`

### Connect a database

Connecting to an API is usually connecting to a *read only* data source. To have a fully functioning app, we need to have a writable data source, such as SQLite.

Apollo does not have a specific `DataSource` subclass for SQL currently, so we use generic `DataSource` class

#### Building a custom data source

Remember the following important subclasses:

1. `initialize` method - use this method if you want to pass any configuration options to a subclass. For example, `initialize` can be used to access our API's `context`
2. `this.context` - useful for storing and sharing user information
3. **Caching** - the generic `DataSource` class does not provide a built-in cache: we can use cache primitives to build our own caching functionality

The following are some methods used in the tutorial example:

- `findOrCreateUser({ email })` - finds or creates a user with a given `email` in the database
- `bookTrips({ launchIds })` - Takes an object with an array of `launchIds` and books them for the logged in user
- `cancelTrip({ launchID })` - Takes an object with a `launchId` and cancels that launch for the logged in user
- `getLaunchIdsByUser()` - Returns all booked trips for the logged in user
- `isBookedOnLaunch({ launchId })` - Determines whether the logged in user has booked a trip on a particular launch

### Add data sources to Apollo Server

Once your own data sources are built, they need to be added to the Apollo Server.

We need to pass a `dataSources` option to the `ApolloServer` constructor - this is an option that return s an object containing newly instantiated data sources. The `index.js` should look like this:

```javascript
require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');

const LaunchAPI = require('./datasources/launch');
const UserAPI = require('./datasources/user');

const store = createStore();

const server = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    launchAPI: new LaunchAPI(),
    userAPI: new UserAPI({ store })
  })
});

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
```

- In the above, we import and call the `createStore` function to set up the SQLite database
- The `dataSources` function is added to the `ApolloServer` constructor to connect instances of `LaunchAPI` and `UserAPI` to our graph
- The database is passed to the `UserAPI` constructor

**NOTE** if `this.context` is used in a datasource, it is IMPORTANT to create a *new* instance in the `dataSources` function rather than sharing a single instance. If not, `initialize` might be called during every execution of the code for a particular user, replacing `this.context` with the context of another user

## 3. Write query resolvers

**Resolver** - a function that is responsible for populating the data for a single field in your schema (whenever a client queries for a particular field, the resolver for that particular field fetches the requested data from the appropriate data source)

A resolver will return one of two things:

- Data of the type required by the corresponding schema field (string, integer, object, etc)
- A promise that fulfills with data of the required type

### The resolver function signature

Resolver functions can accept 4 positional arguments

1. `parent` - The return value of the resolver for this field's parent (the resolver for a parent field always executes *before* the resolvers for that field's children)
2. `args` - Contains all GraphQL arguments provided for this field
3. `context` - Shared across all resolvers that execute for a particular operation. Used to share per-operation state, such as authentication, information and access to data sources
4. `info` - **Only in advanced cases** - contains information about the execution state of the operation

In most cases, `context` is used - it allows resolvers to share instances of our data sources

### Define top-level resolvers

Begin by defining resolvers for top-level fields (since the parent field will always execute before that field's children)

`Query` type

In our example, `Query` type defines 3 fields. Define resolvers in their own `.js` file:

```javascript
module.exports = {
  Query: {
    launches: (_, __, { dataSources }) =>
      dataSources.launchAPI.getAllLaunches(),
    launch: (_, { id }, { dataSources }) =>
      dataSources.launchAPI.getLaunchById({ launchId: id }),
    me: (_, __, { dataSources }) => dataSources.userAPI.findOrCreateUser()
  }
};
```

- Above, we define our resolvers in a map, where the map's keys correspond to our schema's types (`Query`) and fields (`launches`, `launch`, `me`)
- All three resolver functions assign their first positional argument (`parent`) to the variable `_` as a convention to indicate that they don't use its value
- The `launches` and `me` functions assign their second positional argument (`args`) to `_ _` for the same reason
- All 3 resolver functions use the third positional argument (`context`) - They destructure it to access the `dataSources` defined
- None of the resolver functions inlcludes the fourth positional argument (`info`) because they don't use it, and there's no need to include it

**BEST PRACTICE** - keep resolvers short. They rely on the data from our API data sources, so there's no need to make them lengthy

### Add resolvers to Apollo Server

Adding resolvers to Apollo Server is simple. Only 2 lines of code are needed to be added to the `index.js` file. It should look like this:

```javascript
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');
const resolvers = require('./resolvers');

const LaunchAPI = require('./datasources/launch');
const UserAPI = require('./datasources/user');

const store = createStore();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    launchAPI: new LaunchAPI(),
    userAPI: new UserAPI({ store })
  })
});
```

### Run test queries

To run a test query:

1. Run `npm start` in the command line
2. Open `localhost:4000` in the browser
3. Use the query below in the left field of the GraphQL Playground
4. Click play

```sdl
query GetLaunches {
  launches {
    id
    mission {
      name
    }
  }
}
```

- On the right side of the playground screen, a list of mission ids and names will appear.
- To test a query that takes an argument, use the following query:

```sdl
query GetLaunchById {
  launch(id: 60) {
    id
    rocket {
      id
      type
    }
  }
}
```

- The above will return the data for the launch with the id of 60.

- Instead of hard coding arguments in to the query, we can use variables instead:

```sdl
query GetLaunchById($id: ID!) {
  launch(id: $id) {
    id
    rocket {
      id
      type
    }
  }
}
```

- Then in the query variables section on the bottom of the screen, we can define our variables:

```sdl
{
  "id": 60
}
```

### Define other resolvers

In the test queries above, some were run that haven't had resolvers written for them yet. Without resolvers, Apollo defines a default resolver for any field we don't define a custom resolver for to ensure the tests will still run successfully.

It does so using this logic:

```javascript
if ('the parent argument has a property with the resolvers exact name'){
    if('that propertys value is a function') {
        call the function and return its return value;
    }
    else {
        return propertys value;
    }
}
else {
    return undefined;
}
```

In most cases, the default resolver will do exactly what is needed.

In our example, the `Mission.missionPatch` schema needs a custom resolver. It currently looks like this:

```sdl
type Mission {
  # Other field definitions...
  missionPatch(size: PatchSize): String
}
```

The resolver for this schema should return a different value based on whether the query specifies `LARGE` or `SMALL`

The resolver should look like this:

```javascript
// Query: {
//   ...
// },

Mission: {
  // The default size is 'LARGE' if not provided
  missionPatch: (mission, { size } = { size: 'LARGE' }) => {
    return size === 'SMALL'
      ? mission.missionPatchSmall
      : mission.missionPatchLarge;
  },
},
```

- Above, the resolver obtains a large or small patch from `mission` which is the object returned by the default resolver for the *parent* field in the schema `Launch.mission`
- We can now add resolvers for our other schema, `Launch` and `User`:

```javascript
// Mission: {
//   ...
// },

Launch: {
  isBooked: async (launch, _, { dataSources }) =>
    dataSources.userAPI.isBookedOnLaunch({ launchId: launch.id }),
},
User: {
  trips: async (_, __, { dataSources }) => {
    // get ids of launches by user
    const launchIds = await dataSources.userAPI.getLaunchIdsByUser();
    if (!launchIds.length) return [];
    // look up those launches by their ids
    return (
      dataSources.launchAPI.getLaunchesByIds({
        launchIds,
      }) || []
    );
  },
},
```

**NOTE** - the server does not currently kow the identity of the current user when calling functions like `getLaunchIDsByUser`.

### Paginate results

Pagination ensures that our server sends data in small chunks, rather than returning more data than a client needs, and slowing down the process

*Cursor based pagination* is recommended for numbered pages because it eliminates the possibility of skipping and item or displaying the same item more than once
  
- With this system, a constant pointer or cursor is used to keep track of where to start in the data set when fetching the next set of results

In `schema.js` the code should look like this:

```javascript
type Query {
  launches(
    pageSize: Int
    after: String
  ): LaunchConnection!
  launch(id: ID!): Launch
  me: User
}

type LaunchConnection {
  cursor: String!
  hasMore: Boolean!
  launches: [Launch]!
}
```

- Above, `Query.launches` now takes two parameters(`pageSize`, and `after`) and returns a `LaunchConnection` object
  - `LaunchConnection` includes:
    - A list of `launches` (the actual data requested by the query)
    - A `cursor` that idicates the current position in the data set
    - A `hasMore` boolean that indicates whether the data set contains any more items beyond those included in `launches`

In a file named `utils.js` that is downloaded from the tutorial, `paginateResults` is defined for us to import in to our `resolvers.js`

`resolvers.js` should now look like this:

```javascript
const { paginateResults } = require('./utils');

module.exports = {
  Query: {

    launches: async (_, { pageSize = 20, after }, { dataSources }) => {
      const allLaunches = await dataSources.launchAPI.getAllLaunches();
      // we want these in reverse chronological order
      allLaunches.reverse();
      const launches = paginateResults({
        after,
        pageSize,
        results: allLaunches
      });
      return {
        launches,
        cursor: launches.length ? launches[launches.length - 1].cursor : null,
        // if the cursor at the end of the paginated results is the same as the
        // last item in _all_ results, then there are no more results after this
        hasMore: launches.length
          ? launches[launches.length - 1].cursor !==
            allLaunches[allLaunches.length - 1].cursor
          : false
      };
    },
    launch: (_, { id }, { dataSources }) =>
      dataSources.launchAPI.getLaunchById({ launchId: id }),
     me: async (_, __, { dataSources }) =>
      dataSources.userAPI.findOrCreateUser(),
  }
};
```

We can now re-test the server. If it hasn't automatically restarted, simply run `npm start` again

Test with:

```sdl
query GetLaunches {
  launches(pageSize: 3) {
    launches {
      id
      mission {
        name
      }
    }
  }
}
```

## 4. Write mutation resolvers

Mutation resolvers are very similar to resolvers for query operations:

### `login`

Going from the example, we can start with the `login` mutation by writing a resolver for `Mutation.login`.

In the `resolver.js` file, the resolver should look like this:

```javascript
// Query: {
//   ...
// },
Mutation: {
  login: async (_, { email }, { dataSources }) => {
    const user = await dataSources.userAPI.findOrCreateUser({ email });
    if (user) return Buffer.from(email).toString('base64');
  }
},
```

- Above, the resolver takes an `email` and returns a login token for the corresponding user. If the user doesn't exist, one is created.

#### Authenticating logged-in users

**NOTE** in the examples, the method for authenticating users is not secure, but the basic principles are that of token-based authentication, which can be applied to a method that is secure.

`Mutation.login` resolver returns a token that clients can use to authenticate themselves to the server. To add logic to the server:

1. import the `isEmail` function and require it
2. Pass a `context` function to the constructor of ApolloServer that looks like this:

```javascript
const isEmail = require('isemail');

const server = new ApolloServer({

  context: async ({ req }) => {
    // simple auth check on every request
    const auth = req.headers && req.headers.authorization || '';
    const email = Buffer.from(auth, 'base64').toString('ascii');
    if (!isEmail.validate(email)) return { user: null };
    // find a user by their email
    const users = await store.users.findOrCreate({ where: { email } });
    const user = users && users[0] || null;
    return { user: { ...user.dataValues } };
  },
  // Additional constructor options
});
```

- Above, `context` is called once for every GraphQL operation that clients send to the server. The return value becomes the `context` argument that's passed to every resolver that runs as part of the operation.
- This `context` function does 3 things:
  - Obtains the value of the `Authorization` header - if it exists - included in the request
  - Devodes the value of the `Authorization` header
  - If the decoded value resembles an email addressm obtain the user details for that email address from the database and return an object that includes those details in the `user` field

By using the `context` function, our resolvers know to access the details for the particular logged in user and perform those actions specifically for that user

**NOTE** Above is where we would include authentication including passwords to increase security

### `bookTrips` and `cancelTrip`

Adding resolvers for `bookTrips` and `cancelTrip` to the `Mutation` object:

```javascript
//Mutation: {
  
  // login: ...

  bookTrips: async (_, { launchIds }, { dataSources }) => {
    const results = await dataSources.userAPI.bookTrips({ launchIds });
    const launches = await dataSources.launchAPI.getLaunchesByIds({
      launchIds,
    });

    return {
      success: results && results.length === launchIds.length,
      message:
        results.length === launchIds.length
          ? 'trips booked successfully'
          : `the following launches couldn't be booked: ${launchIds.filter(
              id => !results.includes(id),
            )}`,
      launches,
    };
  },
  cancelTrip: async (_, { launchId }, { dataSources }) => {
    const result = await dataSources.userAPI.cancelTrip({ launchId });

    if (!result)
      return {
        success: false,
        message: 'failed to cancel trip',
      };

    const launch = await dataSources.launchAPI.getLaunchById({ launchId });
    return {
      success: true,
      message: 'trip cancelled',
      launches: [launch],
    };
  },
```

- Above, the two resolvers return an object that conforms to the structure of the `TripUpdateResponse` type.
  - This field includes a `success` indicator, a status `message` and an array of `launches` that the mutation will either book or cancel.
  - **NOTE** The `bookTrips` resolver can account for a partial success where some trips are successfully added and some are not, and then returns the launches that were unsuccessful. It returns this within the `message` field

### Run mutations in the GraphQL Playground

To test the mutations start the GraphQL Playground in the browser

#### Obtain a login token

Mutations are structured like queries, except they use the keyword `mutation`. Our first test looks like:

```javascript
mutation LoginUser {
  login(email: "daisy@apollographql.com")
}
```

The playground should respond with a long string, something similar to `ZGFpc3lAYXBvbGxvZ3JhcGhxbC5jb20=`

The long string of characters is the login token which is a Base64 encoded verson of the email address provided.

#### Book trips

Because of the way our app is structured, only authenticated users can book trips. In testing, we can copy the provided login token to authenticate ourselves.

This test should look like this:

```javascript
mutation BookTrips {
  bookTrips(launchIds: [67, 68, 69]) {
    success
    message
    launches {
      id
    }
  }
}
```

and in the HTTP Headers section on the bottom left (using our authentication string):

```json
{
  "authorization": "ZGFpc3lAYXBvbGxvZ3JhcGhxbC5jb20="
}
```

If everything is working, the playground should return a success message, along with the ids of the launches we booked.

## 5. Connect your graph to Apollo Studio

Apollo Studio - a cloud platform that helps with every phase of GraphQL development from prototyping to deploying and monitoring

### Create an Apollo account

Sign up for an account here: [studio.apollographql.com](https://studio.apollographql.com/)

### Create your first graph

In Apollo Studio, each graph is a distinct data graph with a corresponding GraphQL schema.

1. From the Studio Homepage, click New Graph.
2. Provide a name for the graph, click Next.
3. Register the schema (see next step)

### Connect your server

Apollo Server and Apollo Studio can communicate with each other to register the schema and push performance metrics. A graph API key is required for this communication

Within the dialog box, we are provided with our `APOLLO_KEY`, which is a unique identifier for the ApolloServer

**NOTE** The API key should only be explicitly written out in the `.env` file, which is included in the `.gitignore` - the key should never be openly accessible to someone who can view our source code.

- Create a `.env` file and paste in the `APOLLO_KEY=[your unique code here]`
- In the `ApolloServer`, add the option:

```javascript
const server = new ApolloServer({
  // ...other options...
  engine: {
    reportSchema: true
  }
});
```

- Save, and start the server. It may take a few moments, but the Apollo Studio will connect and you will be able to click on your graph.

### Try out free Studio features

#### The Explorer Tab

Explorer tab provides a comprehensive view into the schema, including all documentation strings.

Used to build queries and execute them on the server

Within the explorer tab, set it up to connect with the server URL (in this case, localhost:4000)

We can create queries and operations within this section to run tests.

#### Schema History

In the History tab, we can identify exactly when a particular type or field was added or removed - especially helpful when trying to debug

#### Operation metrics

Apollo Server will push metrics data to Studio for each operation it executes.

This will include a breakdown of the timing and error info for each field.

Open the Operations tab.

- The tab will show performance data from the last 24 hours of the server's operation traces (in the free version. For a look at the last 90 days, you must have a paid plan).
