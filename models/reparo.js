const {sequelizeDb, sequelizeConfig} = require('./oficinaAutomoveis_db')// estamos utilizando o recurso de desestruturação de objetos para importar apenas os módulos necessários.

//CRIANDO TABELA
const reparo = sequelizeConfig.define(
    'reparo',
    {
        carro:{
            type:sequelizeDb.STRING
        },
        data:{
            type:sequelizeDb.TEXT
        },
        tipo_reparo:{
            type:sequelizeDb.STRING
        },
        preco:{
            type:sequelizeDb.FLOAT
        }
    }
)


reparo.sync()
module.exports = reparo