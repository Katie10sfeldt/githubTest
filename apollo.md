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
