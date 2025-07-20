const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
const attivita = JSON.parse(fs.readFileSync("file.json"))

app.get("/tasks", (req, res) =>{
    if(!attivita){
        res.json({
            status: 404,
            message: "File non trovato" 
        })
    }else{
        res.json({
            status: 200,
            message: "File letto con successo",
            dati: attivita 
        })
    }
})

app.get("/tasks-pending", (req, res) =>{
    const done = attivita.filter(elem => elem.done == false)
    if(!done){
        res.json({
            status: 404,
            message: "Attivitá non trovata" 
        })
    }else{
        res.json({
            status: 200,
            message: "Attivitá trovata",
            dati: done 
        })
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server up sotto la porta: ${PORT}`);
});