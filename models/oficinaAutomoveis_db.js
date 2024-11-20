const sequelizeDb = require("sequelize")
const sequelizeConfig = new sequelizeDb(
    'oficinaAutomoveis',//O nome do banco de dados
    'root',// informando o nome de usuário do banco
    '', // informando asenha do banco
    {
        dialect:'sqlite', 
        storage:'./oficinaAutomoveis.sqlite'// nome do arquivo onde será salvo o nosso banco
    }
)

module.exports = {sequelizeDb, sequelizeConfig}