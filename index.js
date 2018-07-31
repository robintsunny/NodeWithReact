const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send({yo: 'bro'})
})

// app.get('/3', (req,res) => {
//     res.send({no: 'nope'})
// })

const PORT = process.env.PORT || 5000;
app.listen(PORT)