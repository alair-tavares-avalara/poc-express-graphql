import CompanyModel from '../models/CompanyModel';
import { modelToType } from 'mongoose-graphql';
import { getProjection, find, findById } from '../utils';

const companyType = modelToType(CompanyModel);

const typeDefs = `
    ${companyType}
`;

const queries = `
    company(id: String!): Company
    companies(skip: Int, limit: Int): [Company]
`;

const resolvers = {
    company: async (root, { id }, source, fieldASTs) => {
        return await findById(CompanyModel, id, fieldASTs);
    },

    companies: async (root, args, source, fieldASTs) => {
        return await find(CompanyModel, args, fieldASTs);
    },
};

export default { typeDefs, resolvers, queries };