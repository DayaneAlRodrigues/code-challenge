function footballPoints(wins, draws, losses){
    const winsPoints = wins * 3;
    const drawsPoints = draws * 1;
    const lossesPoints = losses * 0;
    return winsPoints + drawsPoints + lossesPoints;
}

console.log(footballPoints(3, 4, 2))

console.log(footballPoints(5, 0, 2))

console.log(footballPoints(0, 0, 1))