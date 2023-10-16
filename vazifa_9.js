// Palindrome

let n = 12321;
// let n = 85672;

let a = `${n}`.split("");

for (let i = 1, j = 0; i <= a.length; i++, j++) {
    if (a[j] == a[a.length - i]) {
        // console.log(a[j]);
        // console.log(a[a.length - i]);
        console.log(true);
    }
    else {
        console.log(false);
    }
    // console.log(a[j]);
    // console.log(a[a.length - i]);
}