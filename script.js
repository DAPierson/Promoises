slowMath.add(6,2)
.then((sum) => {
console.log(sum);
return slowMath.multiply(sum,2);
}).then((multiply) => {
    console.log(multiply);
    return slowMath.divide(multiply,4);
}).then((divided) => {
    console.log(divided);
    return slowMath.subtract(divided,3);
}).then((difference) => {
    console.log(difference);
    return slowMath.add(difference, 98);
}).then((sum) => {
    console.log(sum);
    return slowMath.remainder(sum,2);
}).then((remain) => {
    console.log(remain);
    return slowMath.multiply(remain,50);
}).then((multiply) => {
    console.log(multiply);
    return slowMath.remainder(multiply,40);
}).then((remain) => {
    console.log(remain);
    return slowMath.add(remain,32);
}).then((sum) => {
    console.log('The Final Result is ' + sum +',');
}).catch((err) => {
    console.log('Whoops, what happened there?');
})