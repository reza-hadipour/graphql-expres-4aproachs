// app.js
// Run GraphQl using express-graphql (deprecated package)
//The provided code is a simple Express.js server that sets up a GraphQL endpoint using the express-graphql middleware. Let's break down the functionality step by step:

// Importing the necessary modules:
// The express module is used to create an Express.js application.
// The graphqlHTTP module is a middleware provided by express-graphql that allows us to handle GraphQL requests.
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

// Importing the GraphQL schema:
// This line imports the schema from a file named schema.js. The schema defines the shape of the available data and operations in the GraphQL API.
const schema = require('./schema');

// Creating an Express.js application:
const app = express();

// Setting up the GraphQL endpoint
// This code block sets up the /graphql endpoint for handling GraphQL requests using the graphqlHTTP middleware.
// The schema option specifies the GraphQL schema to be used.
// The graphiql option enables the GraphiQL interface, which provides an interactive development environment for testing and exploring the GraphQL API.

app.use('/graphql', graphqlHTTP({
		schema,
		graphiql: true
	})
);

// This code block starts the server and listens on the specified port (either the PORT environment variable or port 3000 if not defined).
// It also logs a message to the console to indicate that the server is running.

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
