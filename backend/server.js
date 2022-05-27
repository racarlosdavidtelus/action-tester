const express = require('express')
const app = express()
require('dotenv').config()

app.get('/', (req,res)=>{
    res.send(`la llave es: ${process.env.RAUL_NO_FE}`)
})

app.listen(4000)
