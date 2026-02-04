const express = require('express')
const app = express()


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

// Exercise 2 URL test 
// http://localhost:3000/roll/20
// http://localhost:3000/roll/potato

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

  // Exercise 3 URL test 
  // http://localhost:3000/collectibles/0
  // http://localhost:3000/collectibles/99

  // Exercise 4: Filter Shoes by Query Paramenters

    const shoes = [
      { name: "Birkenstocks", price: 50, type: "sandal" },
      { name: "Air Jordans", price: 500, type: "sneaker" },
      { name: "Air Mahomeses", price: 501, type: "sneaker" },
      { name: "Utility Boots", price: 20, type: "boot" },
      { name: "Velcro Sandals", price: 15, type: "sandal" },
      { name: "Jet Boots", price: 1000, type: "boot" },
      { name: "Fifty-Inch Heels", price: 175, type: "heel" }
  ];

  app.get('/shoes', (req, res) => {
    let filteredShoes = shoes

    if (req.query['min-price']) {
        filteredShoes = filteredShoes.filter(
            shoe => shoe.price >= Number(req.query['min-price'])
        )
    }

    if (req.query['max-price']) {
        filteredShoes = filteredShoes.filter(
            shoe => shoe.price <= Number(req.query['max-price'])
        )
    }

    if (req.query.type) {
        filteredShoes = filteredShoes.filter(
            shoe => shoe.type === req.query.type
        )
    }

    res.send(filteredShoes)
  })

// Exercise 4 URL test
// http://localhost:3000/shoes
// http://localhost:3000/shoes?type=sneaker
// http://localhost:3000/shoes?min-price=100
// http://localhost:3000/shoes?min-price=100&max-price=600&type=sneaker


app.listen(3000, () => {
    console.log('Listening on port 3000')
})