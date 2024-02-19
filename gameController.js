const game = async (heroes) => {
    console.log("entra en la fncion game")
    const villainZarate = await getZarate(heroes);
}

const getZarate = async (heroes) => {
    const villainZarate = heroes.find(character => character.name === "Junkpile");
    // console.log(zarate);
    return villainZarate;
}

module.exports = {
    game
}