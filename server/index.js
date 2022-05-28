const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())
app.use(express.json())

app.listen(4000, () => console.log('Server running on port 4000'))

app.get("/api/myPokemon", (req, res) => {
    const myPokemon = [Blaziken,
    Shedinja,
    Kyogre,
    Latias,
    Metagross,
    Rayquaza];

    let randomIndex = Math.floor(Math.random() * myPokemon.length);
    let friendlyPokemon = myPokemon[randomIndex];

    res.status(200).send(myPokemon);
});

app.get("/api/eliteFour", (req, res) => {
    const eliteFour = [
        Swellow,
        Shroomish,
        Numel,
        Marshtomp
    ];

    let randomIndex = Math.floor(Math.random() * eliteFour.length);
    let enemyPokemon = eliteFour[randomIndex];

    res.status(200).send(eliteFour);
});
