import AgastModel from '../models/AgastModel';
import { modelToType } from 'mongoose-graphql';
import { getProjection, find, findById } from '../utils';

const agastType = modelToType(AgastModel);

const typeDefs = `
    ${agastType}
`;

const queries = `
    agast(id: String!): Agast
    agasts(code: String, description: String, skip: Int, limit: Int): [Agast]
`;

const resolvers = {
    agast: async (root, { id }, source, fieldASTs) => {
        return await findById(AgastModel, id, fieldASTs);
    },

    agasts: async (root, args, source, fieldASTs) => {
        return await find(AgastModel, args, fieldASTs);
    },
};

export default { typeDefs, resolvers, queries };