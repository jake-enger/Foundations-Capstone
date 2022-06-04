const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())


class Pokemon {
    constructor (name, type, effective) {
        this.name = name
        this.type = type;
        this.effectiveness = randomIndex = Math.floor(Math.random() * );
    }
}

//friendlies
const blaziken = new Pokemon ('Blaziken', fire, );
const shedinja = new Pokemon ('Shedinja', bug, );
const kyogre = new Pokemon ('Kyogre', water, );
const latias = new Pokemon ('Latias', dragon, );
const metagross = new Pokemon ('Metagross', steel );
const rayquaza = new Pokemon ('Rayquaza', dragon);


//baddies
const swellow = new Pokemon ('Swellow', normal );
const shroomish = new Pokemon ('Shroomish', grass );
const numel = new Pokemon ('Numel', ground)
const marshtomp = new Pokemon ('Marshtomp', water)



app.get("/api/myPokemon", (req, res) => {
    const myPokemon = [blaziken,
    shedinja,
    kyogre,
    latias,
    metagross,
    rayquaza];

    let randomIndex = Math.floor(Math.random() * myPokemon.length);
    let friendlyPokemon = myPokemon[randomIndex];

    res.status(200).send(myPokemon)
});

app.get("/api/eliteFour", (req, res) => {
    const eliteFour = [
        swellow,
        shroomish,
        numel,
        marshtomp
    ];

    let randomIndex = Math.floor(Math.random() * eliteFour.length);
    let enemyPokemon = eliteFour[randomIndex];

    res.status(200).send(eliteFour)
});


app.get("/api/comparePkMn", (req, res) => {

})

app.listen(4000, () => console.log('Server running on port 4000'))