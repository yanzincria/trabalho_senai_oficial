// CARREGANDO MÓDULOS
const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const porta = 5000
const path = require("path")

//CONFIGURAR EXPRESS PARA RECEBER DADOS DO FORMULÁRIO
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//Utilizando arquivos estaticos
app.use(express.static(path.join(__dirname,'public/')))

//CONFIGURANDO HANDLEBARS
app.engine('handlebars',handlebars.engine({extended:true}))
app.set('view engine','handlebars')//definindo o handlebars como mecanismo de visualização padrão

//CARREGANDO AS ROTAS
const mecanicoRouter = require('./routes/mecanico')
const reparoRouter = require('./routes/reparo')

//UTILIZANDO AS ROTAS
app.use('/mecanico',mecanicoRouter)
app.use('/reparo',reparoRouter)

// EXIBINDO INFORMAÇÕES NA TELA
app.get("/",(req, res)=>{
   // res.send("<h1>Tudo Funcionando</h1>")
   res.render('home')
})

//EXECUTANDO O SERVIDOR
app.listen(porta, ()=>{
    console.log("Servidor executando na porta ", porta)
})