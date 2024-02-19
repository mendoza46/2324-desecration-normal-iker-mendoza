const game = async (heroes) => {
    console.log("entra en la fncion game")
    const zarate = await getZarate(heroes);
}

const getZarate = async (heroes) => {
    const zarate = heroes.find(character => character.name === "Junkpile");
    // console.log(zarate);
    return zarate;
}

module.exports = {
    game
}