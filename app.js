const c = document.querySelector("#C");
const f = document.querySelector("#F");

c.addEventListener("input", () => {
  let x = parseFloat(c.value);
  if (c.value || c.value === "0") {
    if (x || x === 0) {
      const result = (x * (9/5)) + 32;
      f.value = Math.round(result * 100000) / 100000;
    }
  } else {
    f.value = "";
  }
});

f.addEventListener("input", () => {
  let x = parseFloat(f.value);
  if (f.value || f.value === "0") {
    if (x || x === 0) {
      const result = (x - 32) * (5/9);
      c.value = Math.round(result * 100000) / 100000;
    }
  } else {
    c.value = "";
  }
});