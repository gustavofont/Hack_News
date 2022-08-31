const express = require("express")
const app = express()
const bodyParser = require("body-parser")
//Conexão com Db
const connection = require('./database/database.js')


connection.authenticate().then(()=> {
    console.log("Aêêêêêê, funcionou!!!!!");
}).catch((error) => {
    console.log(error);
})



app.set('view engine' , 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Importenado rotas
const ThreadController = require("./Controllers/ThreadController")
const HomeController = require("./Controllers/HomeController")

app.use('/',ThreadController)
app.use('/',HomeController)
app.get('/',(req,res) => {
    res.redirect('/home')
});

app.listen(8080,()=>{console.log("Funcionando!!")})