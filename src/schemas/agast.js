'use strict';

import mongoose, { Schema } from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';
import Agast from '../models/agast';

const customizationOptions = {}; // left it empty for simplicity, described below
const AgastTC = composeWithMongoose(Agast, customizationOptions);

export default AgastTC;

export const rootQueryFields = {
    agastById: AgastTC.getResolver('findById'),
    agastMany: AgastTC.getResolver('findMany'),
    agastCount: AgastTC.getResolver('count'),
    agastPagination: AgastTC.getResolver('pagination'),
};

export const rootMutationFields = {
    agastCreate: AgastTC.getResolver('createOne'),
    agastUpdateById: AgastTC.getResolver('updateById'),
    agastUpdateOne: AgastTC.getResolver('updateOne'),
    agastUpdateMany: AgastTC.getResolver('updateMany'),
    agastRemoveById: AgastTC.getResolver('removeById'),
    agastRemoveOne: AgastTC.getResolver('removeOne'),
    agastRemoveMany: AgastTC.getResolver('removeMany'),
};