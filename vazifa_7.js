let son = 15;
let sum = 0;

for (let i = 1; i < son; i++) {
    if (son % i === 0) {
        sum += i;
        console.log(i);
    } 
}
if (sum === son) {
    console.log(true);
}
else {
    console.log(false);
}