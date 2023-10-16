// Palindrome

let n = 12321;

let a = `${n}`.split("");

for (let i = 0; i < a.length; i++) {
    if (a[i] == a[a.length - i]) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

// console.log(a);