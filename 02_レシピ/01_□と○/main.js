const figure = document.getElementById("figure")

figure.onclick = function () {
  if (figure.className === "transition square") {
    figure.classList.toggle("rounded")
  } else if (figure.className === "transition square rounded") {
    figure.classList.toggle("triangle")
    figure.classList.remove("rounded")
    figure.classList.remove("square")
  } else {
    figure.className = "transition square"
  }
}
