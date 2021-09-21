const express = require('express');
const app = express();

app.get('/greeting/:name', (req, res) => {
    res.send(`Hello ${req.params.name}, it's so great to see you!`)
})






app.listen(3000, () => {
    console.log("working!")
})