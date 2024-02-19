const game = async (heroes) => {
    console.log("entra en la fncion game")
    const villainZarate = await getZarate(heroes);

    const superHero = await getRandomHero(heroes, villainZarate);
}

const getZarate = async (heroes) => {
    const villainZarate = heroes.find(hero => hero.name === "Junkpile");
    // console.log(zarate);
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

module.exports = {
    game
}