let n = 12345;

let b = `${n}`.split("");
let c = b.map(qiymat => parseInt(qiymat));
console.log(c.reduce((accumulator, cuurentValue) => accumulator + cuurentValue));