//console version calculator

function add(Value1, Value2) {
    let answer = Value1 + Value2;
    console.log(answer);
}

add(1, 4); //adds Value1 nad Value2 //correct


function substract(Value1, Value2) {
    let answer = Value1 - Value2;
    console.log(answer);
}

substract(10, 7); //substractrs Value1 nad Value2 //correct

function SumOfAll(arr) {
    return arr.reduce((acc,curr) => {
        return acc + curr
    });
};

console.log(SumOfAll([2, 3, 409, 12])); //adds 2 + 3 + 409 + 12 = 426

function Multiply(arr) {
    return arr.reduce((acc,curr) => {
        return acc * curr;
    });
};

console.log(Multiply([2,4,6,8,10,12,14])); //multiplies 2 * 4 * 6 * 8 * 10 * 12 * 14 = 645120

function Power(base, exponent) {
    console.log(Math.pow(base, exponent));
}
Power(4, 3);