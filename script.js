let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [a, b, c, d, e, f, g, h, i, j] = numbers;

let number = {
    numbeOne: 1,
    numberTwo: 2,
    numberThree: 3,
    numberFour: 4,
    numberFive: 5,
    numberSix: 6,
    numberSeven: 7,
    numberEight: 8,
    numberNine: 9,
    numberTen: 10,
}
let { numberSix } = number;
let { numberTwo } = number;
let { numberEight: snowman } = number;




let myArray = [6, 2];


function addition([n1, n2]) {
    let adds = n1 + n2;
    alert(adds);

   let h1 = $(`<h1>${adds}</h1>`);
   $('body').append(h1);
}
addition(myArray);




let subtract = ([n1, n2]) => {
    let diff = n1 - n2;
    let h1 = document.createElement('h1');
    let text = document.createTextNode(diff);
    document.body.appendChild(h1);
    h1.appendChild(text);
}
subtract(myArray);





let name = "dustin";

console.log(`Hello ${name} lets get our Math On!`)




slowMath.add(6, 2)
    .then((sum) => {
        console.log(sum);
        return slowMath.multiply(sum, 2);
    }).then((multiply) => {
        console.log(multiply);
        return slowMath.divide(multiply, 4);
    }).then((divided) => {
        console.log(divided);
        return slowMath.subtract(divided, 3);
    }).then((difference) => {
        console.log(difference);
        return slowMath.add(difference, 98);
    }).then((sum) => {
        console.log(sum);
        return slowMath.remainder(sum, 2);
    }).then((remain) => {
        console.log(remain);
        return slowMath.multiply(remain, 50);
    }).then((multiply) => {
        console.log(multiply);
        return slowMath.remainder(multiply, 40);
    }).then((remain) => {
        console.log(remain);
        return slowMath.add(remain, 32);
    }).then((sum) => {
        console.log(`The Final Result is ${sum}`);
    }).catch((err) => {
        console.log(err);
    })