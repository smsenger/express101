const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 8000;


fs.readFile('input', (err, data) => {
    if(err) {
        console.error(err);
        return;
    }
    console.log(data);
})

app.get('/:file', (req, res,) => {
    let types = `.js, .html., .doc, .docx, .pdf`
    res.send (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    </head>
    <body>
    <label for="text">Choose a file for upload. Types allowed: ${types}.</label>
    <input type="file"
    id="avatar" name="text"
    accept=".txt, .js, .html., .doc, .docx, .pdf">
    </body>
    </html>
    `)
})


// app.listen(PORT, (req, res) => {
//     let contents = req.query.input
//     contents = contents.toUpperCase();
//     res.send(`File contents: ${contents}`);
// });


