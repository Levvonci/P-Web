const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
const persone = JSON.parse(fs.readFileSync("file.json"))

app.get("/persone", (req, res) =>{
    if(!persone){
        res.json({
            status: 404,
            message: "Impossibile trovare il file"
        })
    }else{
        res.json({
            status: 200,
            message: "File Caricato",
            dati: persone
        })
    }
})

app.get("/persone/:id", (req, res) =>{
    const id = req.params.id
    const personaid = persone.find(element => element.id == id)
    if(!personaid){
        res.json({
            status: 404,
            message: "ID Errato"
        })
    }else{
        res.json({
            status: 200,
            message: "ID Trovato",
            dati: personaid
        })
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server up sotto la porta: ${PORT}`);
});