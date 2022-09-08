const express = require('express')
const app = express()

const {serverConfig} = require('./config/settings')
const { routerHome } = require('./controller/routes/home')
const { routerLogin } = require('./controller/routes/Login')
const { routerFinancas } = require('./controller/routes/Financas')
const { routerImovel } = require('./controller/routes/imovel')
const { routerImoveis } = require('./controller/routes/imoveis')
const { routerIhone } = require('./controller/routes/admin')

app.set('view engine', 'ejs');
app.use(express.static('views/static'));

app.use('/', routerHome, routerLogin, routerFinancas, routerImovel, routerImoveis, routerIhone)

app.listen(serverConfig.port, () => {
    console.log("SERVER IS RUNNING!")
})