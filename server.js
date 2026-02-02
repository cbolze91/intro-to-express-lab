const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('Listening on port 3000')
})

// Exercise 1

app.get('/greetings/:username', (req, res) => {
    res.send(`Hello there, ${req.params.username}!`)
})

