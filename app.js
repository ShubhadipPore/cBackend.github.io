
const express = require ('express')
const app = express()

app.get('/',(req,res) =>{
    res.json({
        msg : 'Hello Aliens'
    })
})

app.listen(3000)
