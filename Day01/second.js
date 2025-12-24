// 🔹 Ye line turant execute hoti hai jab second.js file load hoti hai
// Chahe file directly run ho ya require() ke through import ho
console.log("Hello ji I am second");


// 🔹 sum function define kiya
// Do numbers lega aur unka addition print karega
function sum(a, b) {
    console.log(a + b);
}


// 🔹 sub function define kiya
// Do numbers lega aur unka subtraction print karega
function sub(a, b) {
    console.log(a - b);
}


// 🔹 module.exports ek empty object hota hai by default
// Node.js har file ke liye ye object automatically bana deta hai
console.log(module.exports);   // {} (initially)


// ================= EXPORTING LOGIC =================

// 👉 Method 1 (commented):
// module.exports = { sum, sub };
// Isme hum ek hi baar me dono functions export kar dete

// 👉 Method 2 (used here):
// module.exports ek object hai, usme properties add kar rahe hain
module.exports.sum = sum;   // sum function export
module.exports.sub = sub;   // sub function export


/*
==================== IMPORTANT CONCEPT ====================

🔸 module.exports actually kya karta hai?

✔ Ye object decide karta hai ki
   "is file se bahar kya accessible hoga"

✔ Jo cheez module.exports me add hoti hai
   wahi require() karne par milti hai

✔ require("./second") ka return hota hai:
   {
     sum: sum,
     sub: sub
   }

===========================================================
*/


/*
==================== OBJECT SHORT HAND EXPLANATION ====================

// Ye dono bilkul same hain 👇

// Long form
{
  sum: sum,
  sub: sub
}

// Short hand (ES6)
{
  sum,
  sub
}

=============================================================
*/


/*
==================== FINAL FLOW ====================

1️⃣ second.js load hoti hai
2️⃣ top-level code execute hota hai (console.log chalega)
3️⃣ functions define hote hain
4️⃣ module.exports me functions attach hote hain
5️⃣ first.js me require() ke through ye object mil jata hai

===================================================
*/
