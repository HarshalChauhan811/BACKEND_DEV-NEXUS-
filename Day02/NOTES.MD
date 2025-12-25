# 📚 LECTURE 02: JS EXECUTION & ARCHITECTURE OPERATING SYSYEM FOR BACKEND 

## 1️⃣ JAVASCRIPT EXECUTION MODEL

**🧠 First Thought Principle:**
JavaScript by nature ek "Seedha-Saadha" language hai. Ye multitasking nahi karta, ye focus ke sath ek baar mein ek hi kaam karta hai.

**Definition:**
JavaScript is a **Single-Threaded** and **Synchronous** language.
*   **Single-Threaded:** Iska matlab ye ek waqt par sirf ek hi command execute karta hai.
*   **Synchronous:** Ye sequential manner (line-by-line) mein chalta hai.

---

## 2️⃣ PROCESSOR ARCHITECTURE (Hardware Level Logic)

### A. Single Core Processor (The Illusion of Speed) 🏃‍♂️
A **Single Core Processor** can handle only **one task at a time**.
Lekin hum apne computer par YouTube, Music, aur Game saath mein chalate hain. Ye kaise hota hai?

**Concept: Context Switching (Concurrency)**
Computer hume **Dhokha (Illusion)** deta hai.
*   CPU tasks ke beech mein itni tezi se switch karta hai ki hume lagta hai sab saath chal raha hai.
*   Is "Rapid Switching" process ko **Context Switching** kehte hain.
*   Is illusion ko **Concurrent Execution** kehte hain.

**🖼️ Figure 1: Single Core Working (Concurrency)**
```text
      (i) Watching YouTube
             |
             v
      +--------------+
      |  SINGLE CORE |  <-- Rapidly Switches (Tik-Tik-Tik)
      |  PROCESSOR   |      Between tasks
      +--------------+
             ^
             |
      (ii) Listening Music   (iii) Playing PUBG
```

---

### B. Why Do We Need Multi-Core Processors? 🐢
Agar hum Single Core par bohot saare tasks (e.g., 10 tasks) daal de, toh **Switching** mein time waste hoga.
*   **Result:** Frequent switching causes delays leading to **System Lag**.
*   **Solution:** **Multi-Core Processor** helps mitigate this by handling multiple tasks in parallel.

**🖼️ Figure 2: Overloaded Single Core**
```text
      +--------------+
      | SINGLE CORE  | <--- (i) YouTube
      | PROCESSOR    | <--- (ii) Music
      +--------------+ <--- (iii) PUBG
             ^
             |
             | ... 10 more tasks 🥵
```
*Here, switching causes delays. We need more hands (cores).*

---

### C. Dual-Core Processor (True Parallelism) 🚀
A **Dual-Core Processor** has two cores, allowing it to run two tasks **truly in parallel**.

*   **Example:** Core 1 YouTube chala raha hai, Core 2 PUBG chala raha hai. No switching needed!
*   **Condition:** Agar tasks cores se zyada ho gaye (e.g., 4 tasks on 2 cores), toh wapas **Context Switching** start ho jayegi.
*   **Conclusion:** Isme **Parallelism** aur **Concurrency** dono coexist karte hain.

**🖼️ Figure 3: Dual Core Scenarios**

**Scenario 1: Pure Parallelism**
```text
      +------------------------+
      |   (Core 1) ---> YouTube|  <-- Both running at
      |                        |      exact same time.
      |   (Core 2) ---> PUBG   |      (No Switching)
      +------------------------+
```

**Scenario 2: Parallelism + Concurrency**
```text
      +------------------------+
      |   (Core 1) ---> YouTube|
      |             + Music    |  <-- Switching here
      |                        |
      |   (Core 2) ---> PUBG   |
      |             + Files    |  <-- Switching here
      +------------------------+
```

---

### D. Octa-Core Processor 🐙
An **Octa-Core Processor** can handle **8 tasks simultaneously**.
*   Agar system ke paas **20 tasks** hain, toh CPU unhe cores par divide karega.
*   Jab saare cores full ho jayenge, tab **Context Switching** use hogi.

---

## 3️⃣ PROCESS vs THREAD (Detailed Comparison) ⚔️

**Analogy:**
*   **Process:** Ek Factory 🏭.
*   **Thread:** Us Factory ke andar kaam karne wale Workers 👷‍♂️.

| Feature | Process 🏭 | Thread 🧵 |
| :--- | :--- | :--- |
| **Definition** | A task that is being executed. (Pura Application) | A smaller unit within a process. (Chota hissa) |
| **Memory** | Has its **own memory**. (Isolated) | **Shares memory** with other threads in the same process. |
| **Communication** | Uses **IPC** (Inter-Process Communication). **Slow**. 🐢 | Shares memory, so communication is **Fast**. ⚡ |
| **Execution** | **Independent** (Chrome crash hua to VS Code chalta rahega). | Runs **within a process** (Chrome band hua to uske tabs bhi band). |
| **Example** | Running Chrome & VS Code separately. | Multiple tabs running inside Chrome. |

**🖼️ Figure 4: Threads inside Process**
```text
        Process (e.g., Chrome Browser)
      /-------------------------------\
      |   ^      ^       ^       ^    |
      |   |      |       |       |    | <--- Threads
      |  (1)    (2)     (3)     (4)   |
      | YouTube Music   PUBG   Files  |
      \-------------------------------/
```

### What is Multi-Threading?
Running multiple threads in a single process to improve performance.

---

## 4️⃣ VIRTUAL MEMORY MANAGEMENT (Gaming Logic) 🎮

**Q. How does a 20GB Game run on 8GB RAM?**
**Concept:**
Modern applications pura data ek saath load nahi karti. Wo data ko **Chunks (Tukdon)** mein load karti hain.
*   **Virtual Memory Management:** Jab tum PUBG khelte ho, toh sirf wahi map area RAM me load hota hai jaha tum khade ho. Baki data Hard Disk me rehta hai.
*   Unused portions remain in storage.

**🖼️ Figure 5: RAM vs Storage Chunks**
```text
      RAM: 8GB                Storage: PUBG (20GB)
    +-----------+            +--------------------+
    | Chunk A   | <--------- | Chunk A (Active)   |
    | Chunk B   |            | Chunk B (Active)   |
    |           |            | Chunk C (Inactive) |
    +-----------+            | Chunk D (Inactive) |
                             +--------------------+
```

> **📌 Important Note (Exam Point):**
> *   **Node.js is Single-Threaded** but supports multi-threading using the **libuv** library.
> *   **Browsers:** V8 engine single-threaded hai, lekin **Web APIs** asynchronous execution allow karti hain (enabling parallelism).

---

## 5️⃣ SYNCHRONOUS vs ASYNCHRONOUS (The Pizza Hut Example) 🍕

**Real Life Scenario:** Pizza Hut mein 3 customers orders dete hain.
1.  **Pizza** 🍕 (Time: 10 min)
2.  **Burger** 🍔 (Time: 5 min)
3.  **Cake** 🍰 (Time: 2 min)

---

### A. Synchronous Execution (Blocking) 🛑
Yaha waiter ek kaam khatam hone ke baad hi dusra shuru karta hai.

**Flow:**
1.  Pizza banaya (10 min) → Served.
2.  Burger banaya (5 min) → Served.
3.  Cake banaya (2 min) → Served.

**Calculation:**
*   Total Time = 10 + 5 + 2 = **17 Minutes**.
*   **Problem:** Cake wale customer ko sirf 2 min ka kaam tha, par usne 15 min wait kiya!

**🖼️ Figure 6: Synchronous Model**
```text
    [ Pizza 🍕 ] --> [ Burger 🍔 ] --> [ Cake 🍰 ]
      10min           5min             2min
    
    Total time taken = 17 Minutes (Inefficient)
```

---

### B. Asynchronous Execution (Non-Blocking) ⚡
Yaha waiter order leta hai, kitchen mein pass karta hai, aur turant agla order le leta hai. Wait nahi karta.

**Flow:**
1.  Pizza order liya → Timer start (10 min).
2.  Burger order liya → Timer start (5 min).
3.  Cake order liya → Timer start (2 min).

**Result:**
*   Cake wala 2 min baad khush hoke chala jayega.
*   Burger wala 5 min baad.
*   Pizza wala 10 min baad.
*   **Total Time:** Sirf **10 Minutes** (Jo maximum time wala task tha).

**🖼️ Figure 7: Asynchronous Model**
```text
    Start --> [ Pizza 🍕 (10m) ] --------------------> Done
    Start --> [ Burger 🍔 (5m) ] ---------> Done
    Start --> [ Cake 🍰 (2m) ] -> Done

    ^
    | Here, tasks are managed Asynchronously.
    | Within 10 minutes, ALL orders get delivered. 🚀
```

**Conclusion:** Node.js isi **Asynchronous** power ka use karta hai taaki server kabhi rukega nahi, chahe kitne bhi users aa jayein!