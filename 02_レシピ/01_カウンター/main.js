const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const mainasuButton = document.getElementById("mainasu-button")
const nibaiButton = document.getElementById("nibai-button")

let count = 0

plusButton.onclick = function () {
  count += 1
  display.textContent = count
}
mainasuButton.onclick = function () {
  count -= 1
  display.textContent = count
}

nibaiButton.onclick = function () {
  count = count * 2
  display.textContent = count
}
