import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import Aluno from '../models/Alunos';

const models = [Aluno];

const connection = new Sequelize(databaseConfig.development);

models.forEach(model => {
    model.init(connection);
    model.sync({ logging: true });
});