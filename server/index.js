const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

class Pokemon {
  constructor (name, type) {
    this.name = name
    this.type = type
  }
  
  effective () {
    return Math.floor(Math.random() * 3)
  }
}

//friendlies
const blaziken = new Pokemon('Blaziken', 'Fire')
const shedinja = new Pokemon('Shedinja', 'Bug')
const kyogre = new Pokemon('Kyogre', 'Water')
const latias = new Pokemon('Latias', 'Dragon')
const metagross = new Pokemon('Metagross', 'Steel')
const rayquaza = new Pokemon('Rayquaza', 'Dragon')

//bad guys
const swellow = new Pokemon('Swellow', 'Normal')
const shroomish = new Pokemon('Shroomish', 'Grass')
const numel = new Pokemon('Numel', 'Ground')
const marshtomp = new Pokemon('Marshtomp', 'Water')

app.get("/api/myPokemon", (req, res) => {
  const myPokemon = [blaziken, shedinja, kyogre, latias, metagross, rayquaza]

  let randomIndex = Math.floor(Math.random() * myPokemon.length)
  let friendlyPokemon = myPokemon[randomIndex]

  res.status(200).send(friendlyPokemon)
})

app.get("/api/comparePkMn", (req, res) => {
  const friendlyPokemon = new Pokemon(req.query.friendlyName, req.query.friendlyType)
  const enemyPokemon = new Pokemon(req.query.enemyName, req.query.enemyType)

  if (friendlyPokemon.effective() >= enemyPokemon.effective()) {
    console.log('Super Effective!')
    res.status(200).send('Super Effective!')
  } else if (friendlyPokemon.effective() === enemyPokemon.effective()) {
    console.log('No special damage')
    res.status(200).send('No special damage')
  } else {
    console.log('Not very effective...')
    res.status(200).send('Not very effective...')
  }
})

app.get("/api/eliteFour", (req, res) => {
  const eliteFour = [swellow, shroomish, numel, marshtomp]

  let randomIndex = Math.floor(Math.random() * eliteFour.length)
  let enemyPokemon = eliteFour[randomIndex]

  res.status(200).send(enemyPokemon)
})

app.listen(4000, () => console.log('Server running on port 4000'))
