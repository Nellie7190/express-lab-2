const express = require('express');
const app = express();



//greetings
app.get('/greeting/:name', (req, res) => {
    res.send(`Hello ${req.params.name}, it's so great to see you!`)
})

//tip calculator
app.get('/tip/:bill/:tipPercentage', (total, tipPercentage) => {
    tipPercentage.send(total.params.tipAmount)
})

//magic 8 ball
const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


app.get('/magic/:question', (req, res) => {
    res.send(`${req.params.question}: <h1>${responses[Math.floor(Math.random()*responses.length-1)]}</h1>`)
})

app.listen(3000, () => {
    console.log("working!")
})