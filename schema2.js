// schema2.js

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql');

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
	  name: 'Query',
	  fields: {
		hello: {
		  type: GraphQLString,
		  resolve: (parent,args,context)=> {
			return context?.user || "dude"},
		}
	  }
	})
  });

module.exports = schema;
