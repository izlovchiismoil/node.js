let a = 5;
const massiv = [1,2,4,3,4];

for (let i = 0; i < massiv.length; i++) {
    let joriyQiymat = massiv[i];
    for (let j = i + 1; j < massiv.length; j++) {
        if ((joriyQiymat + massiv[j]) === a) {
            console.log(`Joriy qiymat = ${joriyQiymat}`);
            console.log(`Keyingi qiymat = ${massiv[j]}`);
        }
    }
}