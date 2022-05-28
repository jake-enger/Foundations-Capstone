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
res.status(200).send(myPokemon)
});


