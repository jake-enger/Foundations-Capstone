const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

class Pokemon {
    constructor (name, type) {
        this.name = name
        this.type = type;
        
        };
    }
    
function effective() {
    var effectiveness =  Math.floor(Math.random() * 3);
    console.log(effectiveness)
}



//friendlies
const blaziken = new Pokemon ('Blaziken', 'Fire' , effective());
const shedinja = new Pokemon ('Shedinja', 'Bug' , effective());
const kyogre = new Pokemon ('Kyogre', 'Water' , effective());
const latias = new Pokemon ('Latias', 'Dragon', effective());
const metagross = new Pokemon ('Metagross', 'Steel' , effective());
const rayquaza = new Pokemon ('Rayquaza', 'Dragon' , effective());


//bad guys
const swellow = new Pokemon ('Swellow', 'Normal', effective());
const shroomish = new Pokemon ('Shroomish', 'Grass', effective());
const numel = new Pokemon ('Numel', 'Ground', effective())
const marshtomp = new Pokemon ('Marshtomp', 'Water', effective())



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

app.get("/api/comparePkMn", (req, res) => {
    if (friendlyPokemon({$effective}) >= enemyPokemon({$effective}))
            console.log('Super Effective!')
   else if (friendlyPokemon({$effective}) === enemyPokemon({$effective}))
            console.log('No special damage')
   else (friendlyPokemon({$effective}) <= enemyPokemon({$effective}))
            console.log('Not very effective...')

    res.status(200).send(comparePkMn)
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


app.listen(4000, () => console.log('Server running on port 4000'))