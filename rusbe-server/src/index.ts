import express from 'express'
import bodyParser from 'body-parser'
import menu from './services/menu.service'
import queue from './services/queue.service'
import threads from './services/threads.service'
import groups from './services/groups.service'
import suggestions from './services/suggestions.service'

const app = express()
app.use(express.json())
app.use(bodyParser.json())

app.use('/', menu)
app.use('/', queue)
app.use('/', threads)
app.use('/', groups)
app.use('/', suggestions)

app.listen(3333,()=>{
    console.log("Servidor ouvindo na porta 3333")
})
