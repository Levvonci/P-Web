const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
app.use(cors())
const lista = JSON.parse(fs.readFileSync('file.json'))

app.get("/tasks", (req, res) =>{
    if(!lista){
        res.json({
            status: "Errore",
            message: "Impossibile leggere il file"
        })
    }else{
        res.json({
            status: "OK",
            dati: lista
        })
    }
})

app.post("/tasks/complete/:id", (req, res) =>{
    const id = req.params.id
    const attivita = lista.find(elem => elem.id == id)
    if(!attivita){
        res.json({
            status: "Errore",
            message: "ID non trovato"
        })
    }else{
        attivita.completed = true
        res.json({
            status: "OK",
            dati: attivita
        })
    }
})







const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server up sotto la port: ${PORT}`)
})