'use strict';

import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';
import Company from '../models/company';

const customizationOptions = {}; // left it empty for simplicity, described below
const CompanyTC = composeWithMongoose(Company, customizationOptions);

export default CompanyTC;

export const rootQueryFields = {
    companyById: CompanyTC.getResolver('findById'),
    companyMany: CompanyTC.getResolver('findMany'),
    companyCount: CompanyTC.getResolver('count'),
    companyPagination: CompanyTC.getResolver('pagination'),
};

export const rootMutationFields = {
    companyCreate: CompanyTC.getResolver('createOne'),
    companyUpdateById: CompanyTC.getResolver('updateById'),
    companyUpdateOne: CompanyTC.getResolver('updateOne'),
    companyUpdateMany: CompanyTC.getResolver('updateMany'),
    companyRemoveById: CompanyTC.getResolver('removeById'),
    companyRemoveOne: CompanyTC.getResolver('removeOne'),
    companyRemoveMany: CompanyTC.getResolver('removeMany'),
};