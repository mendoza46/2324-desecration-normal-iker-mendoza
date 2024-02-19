const gameService = require('./gameService');

const start = async ()=>{

    const heroes = await gameService.getAllHeroes();
}

start();
