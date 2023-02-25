import { DataTypes, Model } from 'sequelize';

export default class Aluno extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: DataTypes.STRING(50),
                allowNull: false,
                set(value) {
                    this.setDataValue('nome', value.toUpperCase());
                }
            },
            sobrenome: {
                type: DataTypes.STRING(50),
                allowNull: false,
                set(value) {
                    this.setDataValue('sobrenome', value.toUpperCase());
                }
            },
            email: {
                type: DataTypes.STRING(150),
                allowNull: true,
                validate: {
                    isEmail: true
                },
                set(email) {
                    this.setDataValue('email', email.toUpperCase());
                } 
            },
            idade: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            peso: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            altura: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
        }, {
            sequelize,
        });

        return this;
    }
}