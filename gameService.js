const { default: axios } = require("axios");

const getAllHeroes = async ()=>{

    const response = await axios.get("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
        .then(function (response) {
            const data = response.data;
            console.log(data);
            return response;
        })
        .catch(function (error) {
            console.log("ERROR: " + error);
            return false;
        });
    ;

    return response;
    
}

module.exports={
    getAllHeroes
}