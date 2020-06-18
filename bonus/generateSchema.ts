/* eslint-disable @typescript-eslint/no-var-requires */
require('module-alias').addAlias('app', require('path').resolve(__dirname, '../src'));
require('dotenv').config();

import { printSchema } from 'graphql';
import path from 'path';
import { schema } from '../src/schema/entrypoints';
import fs from 'fs';

// generate schema.graphql file
const sdl = printSchema(schema, { commentDescriptions: true });
fs.writeFileSync(path.resolve(__dirname, '../bonus/schema.graphql'), sdl);
