// 🔹 sum function banaya
// Input: do numbers (a, b)
// Output: unka addition console me print karega
function sum(a, b) {
    console.log(a + b);
}

/*
==================== EXPORT LOGIC (CommonJS) ====================

👉 module.exports = sum ka matlab:

✔ Is file se bahar sirf **sum function** hi available hoga
✔ require("./second") karne par object nahi,
   balki direct ye function milega
✔ Ye ES Module ke `export default` jaisa behave karta hai

⚠ Note:
- Node.js by default CommonJS use karta hai
- Isliye `export default` tab tak kaam nahi karega
  jab tak package.json me "type": "module" na ho

===============================================================
*/

// ✅ Single function export (Clean & simple)
module.exports = sum;
