const oficinaAutomoveis_db = require('./oficinaAutomoveis_db')// Importando o banco de dados
const reparo = require('./reparo')// importando a tabela departamento

//CRIANDO A TABELA
const mecanico = oficinaAutomoveis_db.sequelizeConfig.define(
    'mecanico',// o nome da tabela
    {
        nome:{
            type:oficinaAutomoveis_db.sequelizeDb.STRING
        },
        especialidade:{
            type:oficinaAutomoveis_db.sequelizeDb.STRING
        },
        contato:{
            type:oficinaAutomoveis_db.sequelizeDb.STRING
        }
    }
)
/*
Não iremos criar os campos 'id_funcionário' e a chave estrangeira, pois o sequelize irá criar esses campos automaticamente, ou seja, tanto a chave primária quanto chave estrangeira são criados pelo sequelize
*/

//CRIANDO A CHAVE ESTRANGEIRA
// Estou dizendo que departamento possui muitos funcionários
reparo.hasMany(mecanico,{
    onDelete:'CASCADE',
    onUpdate: 'CASCADE'
})
mecanico.belongsTo(reparo)// Estou dizendo que funcionário pertence a apenas 1 departamento

mecanico.sync()
module.exports = mecanico