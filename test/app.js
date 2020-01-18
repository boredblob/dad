const box = document.querySelector(".box");

let startX = 0, currentX = 0, lastX = 0;
let startY = 0, currentY = 0, lastY = 0;

const events = {
  start: "pointerdown",
  move: "pointermove",
  end: "pointerup",
  cancel: "pointercancel"
};

if (!box.style.left || !box.style.top) {
  box.style.left = 0;
  box.style.top = 0;
}

function getPos(e) {
  if (e.targetTouches) {
    return [e.targetTouches[0].clientX, e.targetTouches[0].clientY];
  }
  return [e.clientX, e.clientY];
}

function onAnimFrame() {
  let xPos = currentX - startX;
  let yPos = currentY - startY;

  let width = document.body.clientWidth;
  let height = document.body.clientHeight;

  lastX += ((xPos / width) * 100);
  lastY += ((yPos / height) * 100);

  box.style.left = lastX + "%";
  box.style.top = lastY + "%";

  startX = currentX;
  startY = currentY;
}

function handleMove(e) {
  e.preventDefault();
  [currentX, currentY] = getPos(e);
  requestAnimationFrame(onAnimFrame)
}

function handleEnd(e) {
  e.preventDefault();

  document.removeEventListener("pointermove", handleMove);
  document.removeEventListener("pointerup", handleEnd);
  document.removeEventListener("pointercancel", handleEnd);
}

function handleStart(e) {
  e.preventDefault();

  [startX, startY] = getPos(e);

  document.addEventListener("pointermove", handleMove);
  document.addEventListener("pointerup", handleEnd);
  document.addEventListener("pointercancel", handleEnd);
}

if (!PointerEvent) {
  event.start = "touchstart";
  event.move = "touchmove";
  event.end = "touchend";
  event.cancel = "touchcancel";
}

box.addEventListener("pointerdown", handleStart);