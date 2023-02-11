import { DataTypes, Model } from 'sequelize';
import connection from '../database';

class Students extends Model {}

Students.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING(50),
        allowNull: false,
        set(nome) {
            this.setDataValue('nome', nome.toLowerCase());
        }
    },
    sobrenome: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        set(sobrenome) {
            this.setDataValue('sobrenome', sobrenome.toUpperCase());
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        set(email) {
            this.setDataValue('email',  email.toUpperCase());
        },
        validate: {
            isEmail: {
                msg: 'Email entered is invalid.'
            }
        }
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: {
                args: [12],
                msg: 'The minimum age allowed is 12 years old.'
            }
        }
    }
}, {
    sequelize: connection, 
    modelName: 'students',
    charset: 'utf-8',

});

export default (async function initDatabase() {
    await Students.sync({force: false, alter: true, logging: false});
})();
