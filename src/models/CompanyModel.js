'use strict';

import mongoose, { Schema } from 'mongoose';
import { Company } from '../types';

const MODEL_NAME = 'Company';
const schema = new Schema(Company, {collection: MODEL_NAME});

export default mongoose.model(MODEL_NAME, schema);