const memoinput = document.getElementById("memo-input")
const addbutton = document.getElementById("add-button")
const memocontainer = document.getElementById("memo-container")

addbutton.onclick = function () {
  const memo = memoinput.value
  console.log(memo)
  const mememo = document.createElement("div")
  mememo.className = "mememo"
  mememo.textContent = memo
  memocontainer.append(mememo)

  const deleteButton = document.createElement("button")
  deleteButton.className = "delete"
  deleteButton.textContent = "🚽"
  deleteButton.onclick = function () {
    mememo.remove()
  }
  mememo.append(deleteButton)
  memoinput.value = ""
}
