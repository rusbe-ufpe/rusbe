import express from 'express'
import bodyParser from 'body-parser'
import ratingRoutes from './routes/rating'
import menuRoutes from './routes/menu.route'
import queueRoutes from './routes/queue'
import forumRoutes from './routes/forum'
import groupsRoutes from './routes/groups'
import suggestionsRoutes from './routes/suggestions'

const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:4200"
};

const app = express()
app.use(cors(corsOptions));
app.use(express.json())
app.use(bodyParser.json())

app.use('/', ratingRoutes)
app.use('/', menuRoutes)
app.use('/', queueRoutes)
app.use('/', forumRoutes)
app.use('/', groupsRoutes)
app.use('/', suggestionsRoutes)

app.listen(3333,()=>{
    console.log("Server listening on 3333")
})
