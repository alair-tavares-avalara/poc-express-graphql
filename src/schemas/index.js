import { SchemaComposer } from 'graphql-compose';

import { rootQueryFields as AgastRootQueryFields, rootMutationFields as AgastRootMutationFields } from './agast';
import { rootQueryFields as CompanyRootQueryFields, rootMutationFields as CompanyRootMutationFields } from './company';

const GQC = new SchemaComposer();
const ViewerTC = GQC.getOrCreateTC('Viewer');

GQC.rootQuery().addFields({
    viewer: {
        type: ViewerTC.getType(),
        resolve: () => ({}),
    },
});

const fields = {
    ...AgastRootQueryFields,
    ...CompanyRootQueryFields,
};

ViewerTC.addFields(fields);

const mutationFields = {
    ...AgastRootMutationFields,
    ...CompanyRootMutationFields,
};

GQC.rootMutation().addFields(mutationFields);

export default GQC.buildSchema();