let circle = document.getElementById("ball");
let moveBy = 10;

window.addEventListener("load", () => {
  circle.style.position = "absolute";
  circle.style.left = 0;
  circle.style.top = 0;
});

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  var top = parseInt(circle.style.top);
  var left = parseInt(circle.style.left);
  switch (e.key) {
    case "a":
      if (left > 10) circle.style.left = left - moveBy + "px";
      break;
    case "d":
      if (left < window.innerWidth - circle.offsetWidth - 10)
        circle.style.left = left + moveBy + "px";
      break;
    case "w":
      if (top > 10) circle.style.top = top - moveBy + "px";
      break;
    case "s":
      if (top < window.innerHeight - circle.offsetHeight - 10)
        circle.style.top = top + moveBy + "px";
      break;
  }
});
