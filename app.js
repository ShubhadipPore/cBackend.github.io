
const express = require (express)
const app = express()

app.get('/',(req,res) =>{
    res.json({
        msg : 'Hello Backend'
    })
})

app.liste(3000)