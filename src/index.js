const express = require('express')
//Determinado quem poder'a acessar a aplicaçao
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors(
    // origin: ''
))
app.use(express.json())
app.use(routes)

app.listen(3333)