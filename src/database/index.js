import { Sequelize } from 'sequelize';

import databaseConfig from '../config/database';

const connection = new Sequelize(databaseConfig.development);

export default connection;