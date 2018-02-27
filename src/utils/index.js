export function getProjection(fieldASTs) {
    return fieldASTs.fieldNodes[0].selectionSet.selections.reduce((projections, selection) => {
        projections[selection.name.value] = true;
        return projections;
    }, {});
}


export async function findById(model, id, fieldASTs) {
    const projections = getProjection(fieldASTs);
    return await model.findById(id, projections);
}

export async function find(model, args, fieldASTs) {
    const filters = getFiltersFromArgs(args);
    const pagination = getPaginationFromArgs(args);
    const fields = getProjection(fieldASTs);
    return await model.find(filters, fields, pagination);
}

function getFiltersFromArgs(args) {
    if (!args) return;

    args = Object.assign({}, args);

    delete args.skip;
    delete args.limit;
    
    Object.keys(args).forEach(key => {
        if (typeof args[key] === 'string') {
            args[key] = new RegExp(args[key], 'i');
        }
    });

    return args;
};

function getPaginationFromArgs(args) {
    if (!args) return;

    const { skip = null, limit = null } = args;
    return { skip, limit }
};