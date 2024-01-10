// Run GraphQl using apollo-server-express
// The code sets up an Apollo Server with Express and includes GraphQL Playground as a plugin. Here's an explanation of the significant lines:

// These lines import the necessary dependencies for setting up the Apollo Server with Express. Specifically, it imports ApolloServer and gql from the apollo-server-express library, and ApolloServerPluginLandingPageGraphQLPlayground and ApolloServerPluginLandingPageDisabled from the apollo-server-core library. It also imports the express library.
const { ApolloServer, gql } = require('apollo-server-express');  // Importing ApolloServer and gql from apollo-server-express library
const {ApolloServerPluginLandingPageGraphQLPlayground, ApolloServerPluginLandingPageDisabled} = require('apollo-server-core');  // Importing ApolloServerPluginLandingPageGraphQLPlayground and ApolloServerPluginLandingPageDisabled from apollo-server-core library
const express = require('express');  // Importing express library

const app = express();  // Creating an instance of express application
const schema = require('./schema');  // Importing the schema from a file named 'schema.js'


// Create an Apollo Server instance with your schema and resolvers
// This code creates a new instance of the Apollo Server by calling new ApolloServer() and passing an object with the schema and plugins properties.
// The schema property is set to the imported schema variable, which contains the GraphQL schema definition.
// The plugins property is an array of plugins to be used by the Apollo Server. In this case, it

const server = new ApolloServer({schema, plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({}),  // Configure Apollo Server to use GraphQL Playground as a plugin
    ApolloServerPluginLandingPageDisabled()  // Disable the default landing page provided by Apollo Server
] });


// The code defines an async function named startServer.
// Inside the startServer function, it uses the await keyword to wait for the server.start() function to complete. This function starts the Apollo Server.
// After starting the Apollo Server, the code applies the Apollo Server middleware to the Express app using the server.applyMiddleware({ app }) method.
// Outside the startServer function, the startServer() function is called to start the server execution.
// At this point, the server is started, and it will continue to execute the code below:

async function startServer() {
    await server.start();  // Start the Apollo Server
    // Apply the Apollo Server middleware to Express
    server.applyMiddleware({ app });
}

startServer();  // Start the graphql server

// Start the server
// The code calls the listen method on the app object, which is an instance of Express. This method starts the server on a specified port (3001 in this case).
// The listen method takes an options object with the port property set to 3001.
// Additionally, a callback function is passed to the listen method. This function is executed once the server is running and listens for incoming requests.
// Inside the callback function, a message is logged to the console, indicating that the server is running. The message includes the server's URL, which is http://localhost:3001 concatenated with server.graphqlPath, representing the GraphQL endpoint path provided by Apollo Server.

app.listen({ port: 3001 }, () =>
  console.log(`Server is running at http://localhost:3001${server.graphqlPath}`)
);
