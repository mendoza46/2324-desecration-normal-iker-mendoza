const diceNumbers = require('./dices/diceNumbers');

const game = async (heroes) => {
    console.log("entra en la fncion game")
    const villainZarate = await getZarate(heroes);

    const superHero = await getRandomHero(heroes, villainZarate);

    const startingOrder = getStartingOrder(villainZarate, superHero);

    console.log(`WELCOME TO THE COMBAT ARENA!!`);
    console.log(`------------------------------`);
    console.log(`Hoy combatirán ${superHero.name} y ${villainZarate.name}`);
    console.log(`------------------------------`);
    console.log(`Listado de atributos`);
    const superHeroObject = {
        name: superHero.name,
        intelligence: superHero.powerstats.intelligence,
        strength: superHero.powerstats.strength,
        speed: superHero.powerstats.speed,
        durability: superHero.powerstats.durability,
        power: superHero.powerstats.power,
        combat: superHero.powerstats.combat,
        HP: superHero.powerstats.hitPoints
    }
    const villainZarateObject = {
        name: villainZarate.name,
        intelligence: villainZarate.powerstats.intelligence,
        strength: villainZarate.powerstats.strength,
        speed: villainZarate.powerstats.speed,
        durability: villainZarate.powerstats.durability,
        power: villainZarate.powerstats.power,
        combat: villainZarate.powerstats.combat,
        HP: villainZarate.powerstats.hitPoints
    }
    console.log(superHeroObject);
    console.log(villainZarateObject);
    console.log(`------------------------------`);
    console.log(`El primer asalto es para ${startingOrder[0].name}`);
    
    gameLoop(villainZarate, superHero, 1, startingOrder);
}

const gameLoop = (villainZarate, superHero, i, startingOrder) => {
    console.log(`------------------------------`);
    console.log(`Comienza el asalto ${i}`);
    console.log(`------------------------------`);

    let success;

    const firstDiceThrow = diceNumbers.dice1D100();

    if(firstDiceThrow <= startingOrder[0].powerstats.combat){
        success = true;
    }

    if(success){
        const secondDiceThrow = diceNumbers.dice1D20();

        if(secondDiceThrow === 1 || secondDiceThrow === 2){
            console.log("PIFIA")
        }
        else if(secondDiceThrow > 2 && secondDiceThrow < 18){
            console.log("DAÑO NORMAL")
            let normalDamage = Math.ceil((startingOrder[1].powerstats.power + startingOrder[1].powerstats.strength) * secondDiceThrow / 100);
            startingOrder[1].powerstats.hitPoints = startingOrder[1].powerstats.hitPoints - normalDamage;
        }
        else if(secondDiceThrow > 17 && secondDiceThrow < 21){
            console.log("DAÑO CRITICO")
        }
    }
    else{
        console.log("FALLIDOOOO")
    }



    if(villainZarate.powerstats.hitPoints > 0 && superHero.powerstats.hitPoints > 0){
        // gameLoop(villainZarate, superHero, i);
    }
    else{
        console.log("el juego ha terminado")
    }
    i++;
}

const getZarate = async (heroes) => {
    const villainZarate = heroes.find(hero => hero.name === "Junkpile");
    return villainZarate;
}

const getRandomHero = async (heroes, villainZarate) => {

    let randomNum;
    
    do{
        randomNum = Math.floor(Math.random() * heroes.length);
    } while (randomNum === villainZarate.id);

    const superHero = heroes.find(hero => hero.id === randomNum);
    return superHero;
}

const getStartingOrder = (villainZarate, superHero) => {

    let turn = [];

    if(villainZarate.powerstats.intelligence + villainZarate.powerstats.combat > superHero.powerstats.intelligence + superHero.powerstats.combat){
        turn.push(villainZarate);
        turn.push(superHero);
    }
    else if(villainZarate.powerstats.intelligence + villainZarate.powerstats.combat < superHero.powerstats.intelligence + superHero.powerstats.combat){
        turn.push(superHero);
        turn.push(villainZarate);
    }

    turn.forEach(element => {
        // console.log(element)
        element.powerstats.hitPoints = element.powerstats.strength * 10;
        if(element.powerstats.hitPoints > 666){
            element.powerstats.hitPoints = 666;
        }
    });
    
    return turn;
}

module.exports = {
    game
}