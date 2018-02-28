'use strict';

import mongoose, { Schema } from 'mongoose';
import { Agast } from '../types';

const MODEL_NAME = 'Agast';
const schema = new Schema(Agast, { collection: MODEL_NAME });
schema.index({code: 1, companyId: 1}, {unique: true});

export default mongoose.model(MODEL_NAME, schema);