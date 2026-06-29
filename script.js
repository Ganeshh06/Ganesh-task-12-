let P = 100000;
let r = 10;
let n = 1; // yearly compounding
let t = 3;

// A = P(1 + r/n)^(nt)

// let A = P * (1 + (r/n)) * (1 + (r/n)) * (1 + (r/n));
 let A = P *((1 + (r/n))**(n*t))

// let CI = A - P;

console.log("The compound interest after 3 years is " + A.toFixed(2));