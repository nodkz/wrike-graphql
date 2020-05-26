require('module-alias').addAlias('app', require('path').resolve(__dirname, '../src'));

import { printSchema } from 'graphql';
import path from 'path';
import schema from '../src/schema';
import fs from 'fs';

// generate schema.graphql file
const sdl = printSchema(schema, { commentDescriptions: true });
fs.writeFileSync(path.resolve(__dirname, '../bonus/schema.graphql'), sdl);
