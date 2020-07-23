import express from 'express'
import bodyParser from 'body-parser'
import avaliacao from './routes/avaliacao'
import cardapio from './routes/cardapio'
import fila from './routes/fila'
import forum from './routes/forum'
import grupos from './routes/grupos'
import sugestoes from './routes/sugestoes'

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