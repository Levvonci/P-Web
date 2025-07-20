const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
const array = JSON.parse(fs.readFileSync("file.json"))

app.get("/articoli", (req, res) =>{
    if(!array){
        res.json({
            status: 500,
            message: "could not read file, ERROR"
        })
    }else{
        res.json({
            status: 200,
            message: "OK",
            dati: array
        })
    }
})

app.get("/autori", (req, res) =>{
    const autore = [...new Set(array.map(a => a.autore))]
    
    /*  
        Spiegazione della riga soprastante
        ... é un operatore di spread che viene utilizzato per spacchettare gli elementi di una struttura iterabile
        new Set crea un oggetto Set che rimuove automaticamente i duplicati
        [...new Set()] crea l'array senza duplicati di valori spacchettabili
        map() permette di creare un nuovo array, in questo caso a => a.autore estrae il campo autore dall'array originale e ne genera uno nuovo con soli elementi autore
    */

    if(!autore){
        res.json({
            status: 500,
            message: "could not read file, ERROR"
        })
    }else{
        res.json({
            status: 200,
            message: "OK",
            dati: autore
        })
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server up sotto la porta: ${PORT}`);
});