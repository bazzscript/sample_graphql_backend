const graphQl = require('graphql');
const GraphQLSchema = graphQl.GraphQLSchema ;
const  GraphQLObjectType = graphQl.GraphQLObjectType; 
const GraphQLString = graphQl.GraphQLString
/**
 * Construct a GraphQL schema and define the necessary resolvers.
 *
 * type Query {
 *   hello: String
 * }
 */
const Schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => 'world',
      },
    },
  }),
});

// export default schema;
module.exports = Schema;

