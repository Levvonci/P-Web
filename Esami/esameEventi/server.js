const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
const dati = JSON.parse(fs.readFileSync("file.json"))

app.get("/events", (req, res) =>{
    if(!dati){
        res.json({
            status: "Error",
            message: "Impossibile trovare il file"
        })
    }else{
        res.json({
            status: "OK",
            dati: dati
        })
    }
})

app.get("/events/participated/:id", (req, res) =>{
    const id = req.params.id
    const evento = dati.find(element => element.id == id)
    if(!evento){
        res.json({
            status: 404,
            message: `impossibile trovare evento con id: ${id}`
        })
    }else{
        evento.participated = true
        res.json({
            status: 200,
            message: "Evento contrassegnato come partecipato",
            dati: evento
        })
    }
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server up sotto la porta: ${PORT}`);
});
