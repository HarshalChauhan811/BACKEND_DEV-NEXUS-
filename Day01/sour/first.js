// 🔹 ES Module (ESM) syntax use kar rahe hain

// 👉 "./second.js" se default export ko import kar rahe hain
// second.js me `export default sum` hona chahiye
import sum from "./second.js";

// 🔹 Imported function ko call kar rahe hain
sum(3, 8);   // 3 + 8 = 11

// 🔹 Ye current file ka normal code hai
console.log("Hello Ji");


/*
==================== IMPORTANT NOTES ====================

✔ Ye syntax ES Modules ka hai (NOT CommonJS)
✔ Iske liye package.json me ye hona zaroori hai:
   {
     "type": "module"
   }

✔ ES Module me:
   export default sum  →  import sum from "./second.js"

✔ require() yaha kaam nahi karta

========================================================
*/
