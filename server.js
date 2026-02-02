const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('Listening on port 3000')
})

// Exercise 1: Be Polite, Greet the User

app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there, ${req.params.username}!`)
})

//Excercise 1 URL test http://localhost:3000/greetings/Christy

// Exercise 2: Rolling the Dice

app.get('/roll/:number', (req,res) => {
    const number = Number(req.params.number)

    if (isNaN(number)) {
         return res.send ("You must specify a number")
    }

    const roll = Math.floor(Math.random() * (number + 1))
    res.send(`You rolled a ${roll}`)
})

// Exercise 2 URL test http://loclhost:3000/roll/20
//  http://loclhost:3000/roll/potato