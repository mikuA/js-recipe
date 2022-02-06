const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const choice4 = document.getElementById("choice-4")
const feedback = document.getElementById("feedback")

const quiz = {
  text: "私の好きな食べ物は何でしょう",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "もも",
      feedback: "正解🍑大正解やで",
    },
    {
      text: "肉",
      feedback: "正解🍖正解やで",
    },

    {
      text: "お寿司",
      feedback: "正解🍣サーモンがすきやで",
    },
    {
      text: "グリーンピース",
      feedback: "滅びて欲しい",
    },
  ],
}

const reloadQuiz = function () {
  quizText.textContent = "Q. " + quiz.text

  quizImage.src = "./images/" + quiz.image

  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  choice4.textContent = quiz.choices[3].text
}

const choose = function (choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function () {
  choose(0)
}
choice2.onclick = function () {
  choose(1)
}
choice3.onclick = function () {
  choose(2)
}
choice4.onclick = function () {
  choose(3)
}

reloadQuiz()
