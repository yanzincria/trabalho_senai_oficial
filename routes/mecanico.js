const express = require('express')
const router = express.Router()// Módulo que irá trabalhar com rotas

const mecanico = require('../models/mecanico')
const reparo = require('../models/reparo')

//CRIANDO ROTAS
//1ª ROTA - INSERIR DADOS NA TABELA
router.post('/store',async(req, res)=>{
    const resultado = await mecanico.create({
        nome : req.body.nome,
        especialidade:req.body.especialidade,
        contato:req.body.contato,
        reparoId:req.body.mecanico// esse campo é a chave estrangeira
    })  

    if(resultado){
        res.redirect('/')
    }
    else{
        res.json({erro:"Não foi possível cadastrar os dados"})
    }

})

//2ª ROTA - EXIBIR PÁGINA RAIZ DE FUNCIONÁRIO
router.get('/show',(req, res)=>{
    res.render('mecanico/index')
 
 })

 //3ª ROTA - CONSULTAR DADOS DO BANCO
router.get('/',async(req, res)=>{
    let resultado = await mecanico.findAll({include:reparo})// o include:departamento é como o sequelize faz para poder realizar consultas com join
    if(resultado){
        console.log(resultado)
        res.render('mecanico/index',{dados:resultado})
    }
    else{
        console.log("Não foi possível exibir os dados")
    }
})

//4ª ROTA - DELETAR DADOS DO TABELA
// :id significa que iremos passar um valor na rota, ou seja, iremos informar um valor que poderá ser diferente e que será armazenado pela variável :id
router.get('/destroy/:id',async(req, res)=>{
    const resultado = await mecanico.destroy({
        where:{
            id:req.params.id// estamos recebendo o id via parâmetro que está sendo passado na rota, no caso, é o :id que estamos recebendo.
        }
    })
    res.redirect('/')
})

//5ª ROTA - EXIBIR FORMULÁRIO DE CADASTRO
router.get('/create',async(req, res)=>{
    let resultado = await reparo.findAll()
    if(resultado){
        console.log(resultado)
        res.render('mecanico/addMecanico',{dados:resultado})
    }
    else{
        console.log("Não foi possível carregar nenhum dado")
        res.redirect('/')// redirecionando para a página inicial
    }
    
})

module.exports = router
