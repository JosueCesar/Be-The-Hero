import knex from 'knex';
import { development, test } from '../../knexfile';

const config = process.env.NODE_ENV == 'test' ? test : development;

const connection = knex(config);

export default connection;