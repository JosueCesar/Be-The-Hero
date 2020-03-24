import knex from 'knex';
import { development } from '../../knexfile';

const connection = knex(development);

export default connection;