function areaOfRectangle(base, height){
    if (base === 0 | height === 0 | base < 0 | height < 0){
        return -1 + " Área inválida!";
    }
    return base * height;
}
const base = 3;
const height = 4;
const area1 = areaOfRectangle(base, height);

const area2 = areaOfRectangle(5,7);

const area3 =  areaOfRectangle(5, 0);

const area4 =  areaOfRectangle(5, -1);

console.log(`A area do retangulo com base igual a ${base} e altura igual a ${height} é igual a ${area1}.`)
console.log(`A area do retangulo com base igual a 5 e altura igual a 7 é igual a  ${area2}.`)
console.log(`A area do retangulo com base igual a 5 e altura igual a 0 é igual a  ${area3}.`)
console.log(`A area do retangulo com base igual a 5 e altura igual a 7 é igual a  ${area4}.`)