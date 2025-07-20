const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());


let counter = 5

app.get("/counter", (req, res) =>{
    res.json({
        counter: counter  
    })
})

app.post("/increase", (req, res) =>{
    counter++
    res.json({
        counter: counter
    })
})

app.post("/decrease", (req, res) =>{
    counter--
    res.json({
        counter: counter
    })
})

app.get("/colors", (req, res) =>{
    res.json({
        "background": "#882200",
        "text": "#44DDAA"
    })
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server up sotto la porta: ${PORT}`);
});