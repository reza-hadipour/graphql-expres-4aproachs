// app.js
// Run GraphQl using graphql-http

// The code begins by importing the necessary modules for the server setup. It imports the express module, which is the framework used for building web applications in Node.js. It also imports the createHandler function from the graphql-http library, which is a GraphQL HTTP handler specifically designed for Express. Additionally, it imports the expressPlayground module, which provides the GraphQL Playground interface for Express. Finally, it imports the GraphQL schema from a file named schema2.js, and creates an instance of the Express application using the express() function.

// Importing required modules
const express = require('express'); // Express framework for building web applications
const { createHandler } = require('graphql-http/lib/use/express'); // GraphQL HTTP handler for Express
const expressPlayground = require('graphql-playground-middleware-express').default; // GraphQL Playground for Express

const schema = require('./schema2'); // Importing GraphQL schema
const app = express(); // Creating an Express application



// Setting up the GraphQL endpoint
// This code block sets up the GraphQL endpoint for handling GraphQL requests.
// The app.all('/graphql', ...) method sets up a route that matches all HTTP methods (GET, POST, etc.) for the /graphql URL path.
// The first middleware function (req, res, next) => {...} is executed for every incoming request to the /graphql endpoint. In this case, it assigns the value "Agha Reza" to the user property of the request object. This can be accessed in subsequent middleware or resolver functions.
// The next() function is called to proceed to the next

app.all('/graphql',
	(req, res, next) => {
		req.user = "Reza"; // Assigning the value "Reza" to the user property of the request object
		next(); // Proceed to the next middleware
	},
	(req, res) => {
		createHandler({
			schema,
			context: () => {
				return { user: req?.user || "Reza" }; // Creating a context object with the user property based on the request object
			}
		})(req, res); // Creating a GraphQL HTTP handler and invoking it with the request and response objects
	}
);


// The expressPlayground middleware provides the GraphQL Playground interface at the specified endpoint, allowing users to interactively explore and test the GraphQL API.
// This line sets up a route using the app.get() method of the Express application.
// The route is defined as /playground, which means it will match requests to the /playground URL path.
// The expressPlayground middleware is invoked with an options object containing the endpoint property set to '/graphql'.

app.get('/playground', expressPlayground({endpoint: '/graphql'}))	// Setting up the GraphQL Playground endpoint


// Starting the server
// This code block starts the server by calling the listen() method of the Express application.
// The listen() method takes two arguments: the port number and a callback function that is executed when the server starts listening for requests.

const PORT = process.env.PORT || 3002;	// Setting the port for the server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);	// Logging a message indicating that the server is running
});
