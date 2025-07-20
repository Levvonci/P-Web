const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
app.use(cors())

const array = JSON.parse(fs.readFileSync("file.json"))
app.get("/citations", (req, res) =>{
    if(!array){
        res.json({
            status:400,
            message:"Error, could not find file"
        })
    }else{
        res.json({
            status:200,
            message:"OK",
            dati: array
        })  
    }
})

app.get("/citation/:id", (req, res) =>{
    const id = req.params.ID
    const oggetto = array.find(ele => ele.id == id)
    if(!oggetto){
        res.json({
            status:400,
            message:"Error, no id match"
        })
    }else{
        res.json({
            status:200,
            message:"OK",
            dati: oggetto
        })  
    }
})

const PORT = 3000
app.listen(PORT, () =>{
    console.log(`Server running under ${PORT}`)
})
