const dice1D100 = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    return number;
}

const dice1D20 = () => {
    const number = Math.floor(Math.random() * 20) + 1;
    return number;
}
module.exports={
    dice1D100,
    dice1D20
}