import { Sequelize } from 'sequelize';

import databaseConfig from '../config/database';


const database =  new Sequelize(databaseConfig.development);


console.log(database);


