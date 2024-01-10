// schema.js

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = require('graphql');

// Defining a simple GraphQL type for articles
const ArticleType = new GraphQLObjectType({
	name: 'Article',
	fields: {
		id: { type: GraphQLString },
		title: { type: GraphQLString },
		content: { type: GraphQLString },
	},
});
// Defining the root query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		article: {
			type: ArticleType,
			args: { id: { type: GraphQLString } },
			resolve(parent, args) {
				const articleData = {
					id: args.id,
					title: 'Introduction to GraphQL',
					content: 'This is a sample article about GraphQL on GeeksforGeeks.',
				};
				return articleData;
			},
		},
	},
});
// Creating the GraphQL schema
module.exports = new GraphQLSchema({
	query: RootQuery,
});
