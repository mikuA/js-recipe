//発展1
const fizzbuzz = function (number) {
  for (let n = 0; n <= number; n++) {
    if (n % 15 === 0) {
      console.log(`FizzBuzz`)
    } else if (n % 3 === 0) {
      console.log(`Fizz`)
    } else if (n % 5 === 0) {
      console.log(`Buzz`)
    } else {
      console.log(n)
    }
  }
}

//fizzbuzz(100)
//発展2
const genkiFunction = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0 || /3/.test(n)) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}

//genkiFunction(100)

//発展3

let count = 0
let maxValue = 0

const a = function (number) {
  maxValue = number
  //setIntervalの引数の関数は引数を持つことができない
  setInterval(countUp, 1000)
}

const countUp = function () {
  count += 1
  if (count > maxValue) {
    //setIntervalを止める
    clearInterval(a)
  } else {
    count += 1
    if (count % 3 === 0 || /3/.test(count)) {
      console.log(`${count}!!!!!!!`)
    } else {
      console.log(count)
    }
  }
}
