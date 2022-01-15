// button 要素と click イベント
const aiu = document.getElementById("button")

aiu.onclick = function () {
  alert("クリックしたね")
}

// input 要素と input イベント
// const inputText = document.getElementById("input-text")
// const inputDate = document.getElementById("input-date")

// const sayHello = function() {
//  console.log("hello")
//}

// inputText.oninput = sayHello
// inputDate.oninput = sayHello

// input 要素と input イベント 書き換え後
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function (e) {
  console.log(e.key)
}

inputText.onkeydown = logValue
inputDate.oninput = logValue
