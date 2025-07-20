const express = require('express')
const cors = require('cors')
const fs = require('fs')

const app = express()
app.use(cors())
const dati_json = JSON.parse(fs.readFileSync("file.json"))

app.get("/items", (req, res) =>{
    if(!dati_json){
        res.json({
            status: "Errore",
            message: "Impossibile trovare il file"
        })
    }else{
        res.json({
            status: "OK",
            dati: dati_json
        })
    }
})

app.get("/items-complete", (req, res) =>{
    const dati = dati_json.filter(elem => elem.completato == true)
    if(!dati){
        res.json({
            status: "Error",
            message: "Attivitá non trovata"
        })
    }else{
        res.json({
            status: "Ok",
            dati: dati
        })
    }
})

const PORT = 3000
app.listen(PORT, () =>{
    console.log(`Server up sotto la porta ${PORT}`)
})