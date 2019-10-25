"use strict";

{
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    // const r = ["大吉", "中吉", "凶", "末吉"];
    // const n = Math.floor(Math.random() * r.length);
    // btn.textContent = r[Math.floor(Math.random() * r.length)];
    const n = Math.random(); // control ratio
    if (n < 0.05) {
      btn.textContent = "大吉";
    } else if (n < 0.2) {
      btn.textContent = "中吉";
    } else {
      btn.textContent = "凶";
    }

    // switch (n) {
    //   case 0:
    //     btn.textContent = "大吉";
    //     break;
    //   case 1:
    //     btn.textContent = "中吉";
    //     break;
    //   case 2:
    //     btn.textContent = "凶";
    //     break;
    // }
  });
}
