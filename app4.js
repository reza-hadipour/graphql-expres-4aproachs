// Run GraphQl using @apollo/server

const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const cors = require('cors');
const express = require('express');

const schema = require('./schema2');

const app = express();

// Define an asynchronous function to start the server
// A function named startServer is defined using the async keyword to indicate that it is an asynchronous function. This function will be responsible for starting the Apollo Server.

// Inside the startServer function, a new instance of ApolloServer is created. It takes an object as a parameter with the schema property set to the imported schema.
// The start() method is called on the server instance. This method initializes the Apollo Server and prepares it to handle incoming requests.

// Express middleware is set up using the app.use() method. The expressMiddleware function is passed the server instance as a parameter to connect Apollo Server with Express. The middleware is mounted at the /graphql path, which means that all requests to /graphql will be handled by Apollo Server.

// The app.listen() method is called to start the server on port 3030. It takes a callback function that logs a message to the console indicating that the server is running on port 3030.

// Finally, the startServer function is called to start the server execution.


let startServer = async function(){    
    const server = new ApolloServer({
        schema
    });

    // Call the start() method on the ApolloServer instance before passing it to expressMiddleware
    await server.start();
    
    // Specify the path where we'd like to mount our server
    app.use('/graphql', cors(), express.json(), expressMiddleware(server));
    
    // Start the server on port 3030 and log a message when it's running
    app.listen(3030,()=>{console.log(`Server is running on 3030`);})
}

// Call the startServer function to start the server
startServer();