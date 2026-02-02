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

// Exrcise 3: I Want THAT One!

  const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  app.get('/collectibles/:index', (req, res) => {
    const index = Number(req.params.index)
    const item = collectibles[index]

    if (!item) {
        return res.send ("This item is not yet in stock. Check back soon!")
    }    

    res.send( `So, you want the ${item.name}? For $${item.price}, it can be yours!`)
  })

  // Exercise 3 URL test http://localhost:3000/collectibles/0
  //  http://localhost:3000/collectibles/99