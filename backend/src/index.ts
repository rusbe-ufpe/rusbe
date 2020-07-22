import express from 'express'
import bodyParser from 'body-parser'
const avaliacao = require('./routes/avaliacao') 
const cardapio = require('./routes/cardapio')
const fila = require('./routes/fila')
const forum = require('./routes/forum')
const grupos = require('./routes/grupos')
const sugestoes = require('./routes/sugestoes')

const app = express()
app.use(express.json())
app.use(bodyParser.json())

app.use('/', avaliacao)
app.use('/', cardapio)
app.use('/', fila)
app.use('/', forum)
app.use('/', grupos)
app.use('/', sugestoes)

app.listen(3333,()=>{
    console.log("Servidor ouvindo na porta 3333")
})