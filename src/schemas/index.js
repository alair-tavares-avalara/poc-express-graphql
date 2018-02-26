import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';
import AgastSchema from './agast';
import CompanySchema from './company';

const RootQuery = `
    type RootQuery {
        ${AgastSchema.queries}
        ${CompanySchema.queries}
    }
`;

const SchemaDefinition = `
    schema {
        query: RootQuery
    }
`;

const typeDefs = [
    SchemaDefinition,
    RootQuery,
    AgastSchema.typeDefs,
    CompanySchema.typeDefs
];

const resolvers = {
    RootQuery: {
        ...AgastSchema.resolvers,
        ...CompanySchema.resolvers
    }
};

export default makeExecutableSchema({
    typeDefs,
    resolvers
});