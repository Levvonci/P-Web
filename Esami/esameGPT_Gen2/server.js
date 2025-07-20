const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()
app.use(cors())
const array = JSON.parse(fs.readFileSync('file.json'))

app.get("/utenti", (req, res) =>{
    if(!array){
        res.json({
            status: "Error",
            message:"Cant read file" 
        })
    }else{
        res.json({
            status: "OK",
            dati: array
        })
    }
})

app.get("/utenti/:id", (req, res) =>{
    const id = req.params.id
    const dati = array.find(el => el.id == id)
    if(!dati){
        res.json({
            status: "Error",
            message: "ID not found"
        })
    }else{
        res.json({
            message: "OK",
            dati: dati
        })
    }
})


const PORT = 3000
app.listen(PORT, () =>{
    console.log(`Server Running Under ${PORT}`)
})