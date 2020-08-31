import express from 'express'
import bodyParser from 'body-parser'
import avaliacao from './routes/rating'
import cardapio from './routes/menu'
import fila from './routes/queue'
import forum from './routes/forum'
import grupos from './routes/groups'
import sugestoes from './routes/suggestions'

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
