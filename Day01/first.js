// 🔹 CommonJS (CJS) Module System (Node.js ka default system)

// 👉 "./second" file se `sum` aur `sub` functions import kar rahe hain
// require() ka kaam hota hai dusri JS file ka exported code yaha lana
const { sum, sub } = require("./second");


// 🔹 Imported functions ko yaha use kar rahe hain
// Ye actual implementation second.js me likhi hoti hai

sum(3, 4);   // sum function call → 3 + 4
sub(7, 8);   // sub function call → 7 - 8


// 🔹 Ye first.js ka apna code hai
// Jab bhi file run hogi, ye line execute hogi
console.log("Hello I am first");



/*
==================== IMPORTANT CONCEPT ====================

🔸 CJS (CommonJS) kya hota hai?

✔ Node.js me har JS file ek module hoti hai
✔ Ek file ka code dusri file me directly available nahi hota
✔ Code share karne ke liye:
   - module.exports → code bahar bhejne ke liye
   - require() → code import karne ke liye

===========================================================
*/



/*
==================== IIFE EXPLANATION ====================

Niche wala code ek IIFE hai
(IIFE = Immediately Invoked Function Expression)

(function () {
    console.log("Hello ji I am second");

    // 🔹 Ye function sirf isi function ke scope me available hai
    function sum(a, b) {
        console.log(a + b);
    }

    sum(4, 3);
})();

🔹 Ye turant execute ho jata hai
🔹 Global scope ko safe rakhta hai
🔹 Lekin ye CommonJS module nahi hai
🔹 Isko require() karke import nahi kar sakte

===========================================================
*/



/*
==================== SHORT SUMMARY ====================

✔ require() → dusri file ka code lane ke liye
✔ module.exports → code export karne ke liye
✔ CJS → Node.js ka default module system
✔ IIFE → scope control ke liye, module sharing ke liye nahi

======================================================
*/
