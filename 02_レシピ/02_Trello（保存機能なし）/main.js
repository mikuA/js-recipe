const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

addButton.onclick = function () {
  const card = createCard(inputElement.value)
  container.append(card)
  inputElement.value = ""
}
const createCard = function (text) {
  const card = document.createElement("div")
  card.className = "card"

  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  deleteButton.onclick = function () {
    card.remove()
  }

  card.append(deleteButton)
  return card
}

const inputElement2 = document.getElementById("input-todo2")
const container2 = document.getElementById("cards-container2")
const addButton2 = document.getElementById("add-button2")

addButton2.onclick = function () {
  const card2 = createCard2(inputElement2.value)
  container2.append(card2)
  inputElement2.value = ""
}
const createCard2 = function (text) {
  const card2 = document.createElement("div")
  card2.className = "card2"

  const todo2 = document.createElement("div")
  todo2.className = "todo2"
  todo2.textContent = text
  card2.append(todo2)

  const deleteButton2 = document.createElement("div")
  deleteButton2.className = "delete2"

  deleteButton2.onclick = function () {
    card2.remove()
  }

  card2.append(deleteButton2)
  return card2
}
