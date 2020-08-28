# Oauth and OpenID Connect

## Oauth 2.0

Only meant for authorization, granting access to data, and features from one app to another.
It is like giving the client a key. The key is useful to access data, but it does not tell the client anything about the Resource owner.

- Oauth passes the responsibility of password security to another application
- Essentially, the user gives permission for a particular app to use a 'key' to gain access to information from the Oauth
- The Oauth flow:
  - Authorization code flow:
    - Starts with a user logging in to an application with a particular service
    - The service checks if you are logged in, and redirects user back to the application

- Resource owner - the user. Owner of own identity and data
- Client - the application. Wants to perform an action on behalf of the resource owner
- Authorization Server - application that knows the resource owner
- Resource Server - the API (the information the client needs) the client wants to use on behalf of the resource owner (in some cases, the authorization server and resource server are the same)
- Redirect URI - the URL the server will redirect the resource owner to after granting permission to the client (sometimes called a callback URL)
- Response Type - type of info the client expects to receive (code is most common (auth code))
- Scope - the permissions the client is requesting (read only, access to info, perform actions)
- Consent - authorization server takes the scopes and confirms with the resource owner that they would like to grant access to the client
- Client ID - used to identify the client with the auth server
- Client Secret - password that only the client and auth server know - allows exchange of info behind the scenes
- Authorization Code - temporary code that the auth server sends to the client, client then sends code back to the server along with the client secret in exchange for an access token
- Access Token - the key the client will use to communicate with the resource server

## OpenID Connect (OIDC)

A thin layer that sits on Oauth that adds functionality around login and profile info about the person who is logged in.
Instead of a key, OpenID is more like a badge that gives the client permission, as well as containing info about who you are.
Allows a client to establish a login session (authentication) and gain info about the resource owner (identity)

Authorization servers that support OpenID Connect are called Identity Providers

Enables scenarios where one login can support multiple applications (single sign on or SSO) - Facebook and Twitter are examples of this

OIDC is like an ATM machine:

- ATM machine is the client
- Bank card is the token issued by the bank (gives ATM auth to the bank, and gives info about the bank holder, as well as authentication like a PIN and expiration)

With OIDC, it is similar to the steps in Oauth, the only difference is that when the Authorization server responds with an Access token to the client, it also responds with an ID token

ID token is a JSON Web token or JWT

- Data inside JWT is called a claim
