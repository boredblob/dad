function submitForm() {
  const output = document.querySelector(".output");
  const form = document.querySelector("form");
  const formdata = new FormData(form);

  let data = [];
  
  for (let d of formdata.values()) {
    data.push(d);
  }

  if (data.length !== 2) {
    console.log("Invalid selection");
    return;
  }

  const temp = tempConverter(...data);
  output.innerHTML = temp;
}

// takes unit of input value
function tempConverter(unit, value) {
  if (unit === "c") {
    return ((value * (9/5)) + 32) + " °F";
  }
  if (unit === "f") {
    return ((value - 32) * (5/9)) + " °C";
  }
  return "Unrecognised Unit";
}

document.body.addEventListener("contextmenu", () => {
  submitForm();
});