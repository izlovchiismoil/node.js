// Palindrome

// let n = 12321;
let sanagich = 0;
let n = 85672;

let a = `${n}`.split("");

for (let i = 1, j = 0; i <= a.length; i++, j++) {
    if (a[j] == a[a.length - i]) {
        sanagich++;
    }
}

if (sanagich === a.length) {
    console.log(true);
}
else {
    console.log(false);
}