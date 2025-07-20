const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());

const books = JSON.parse(fs.readFileSync("file.json"));

app.get('/books', (req, res) => {
    if (!books) {
        res.json({
            status: "error",
            message: "File not found"
        })
    } else {
        res.json({
            sttaus: "OK",
            data: books 

        })
    }
})

app.post("/books/letti/:id", (req, res) => {
    const id = req.params.id;
    const book = books.find(b => b.id == id);
    if(!book){
        res.json({
            status: "Error",
            message: "Book not found"
        })
    }else{
        book.letti = true;
        res.json({
            status: "OK",
            data: books
        })
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Il server è in ascolto sulla porta PORT`);
});