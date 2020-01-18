const c = document.querySelector("#C");
const f = document.querySelector("#F");

c.addEventListener("input", () => {
  let x = parseFloat(c.value);
  if (c.value) {
    if (x) {
      f.value = (x * (9/5)) + 32;
    }
  } else {
    f.value = "";
  }
});

f.addEventListener("input", () => {
  let x = parseFloat(f.value);
  if (f.value) {
    if (x) {
      c.value = (x - 32) * (5/9);
    }
  } else {
    c.value = "";
  }
});