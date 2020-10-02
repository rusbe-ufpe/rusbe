import express from 'express'
import bodyParser from 'body-parser'
import menu from './services/menu.service'
import queue from './services/queue.service'
import threads from './services/threads.service'
import groups from './services/groups.service'
import login from './services/login.service'
import suggestions from './services/suggestions.service'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://rusbe:rusbe@cluster0.kej1e.gcp.mongodb.net/rusbe_db?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use('/', menu)
app.use('/', queue)
app.use('/', threads)
app.use('/', groups)
app.use('/', suggestions)
app.use('/', login)

app.listen(3333,()=>{
    console.log("Servidor ouvindo na porta 3333")
})
