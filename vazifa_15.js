const massiv = [12,11,56,10,6];

const max = Math.max(...massiv);
const maxIndex = massiv.indexOf(max);

massiv.splice(maxIndex,1);

console.log(Math.max(...massiv));