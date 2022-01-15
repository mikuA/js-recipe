const hikakin = {
  name: "ヒカキン",
  age: 24,
  hobbies: ["ゲーム", "動画編集", "猫と遊ぶこと"],
  isHappy: true,
  address: {
    country: "日本",
    city: "東京",
  },
  sayHello: function () {
    console.log("ブンブンハロー YouTube")
  },
}

// 練習問題
// hikakin オブジェクトに入っている sayHello メソッドを実行してください。
hikakin.sayHello()

//配列
const karappo = []
console.log(karappo)

const taiikuSeiseki = [1, 3, 5]
console.log(taiikuSeiseki)

const barabara = ["とーや", 3, "やすなり"]
console.log(barabara)

const toyaBijutsu = 1
const ryotaBijutsu = 3
const yasunariBijutsu = 5

const bijutsuSeiseki = [toyaBijutsu, ryotaBijutsu, yasunariBijutsu]
console.log(bijutsuSeiseki)

const seisekibo = [
  { name: "とーや", taiiku: 1, bijutsu: 5, doutoku: 5 },
  { name: "りょーた", taiiku: 3, bijutsu: 3, doutoku: 3 },
  { name: "やすなり", taiiku: 5, bijutsu: 5, doutoku: 1 },
]
//配列のアクセス
console.log(seisekibo[0])
console.log(seisekibo[0].name)

//配列の要素書き換え
seisekibo[0] = { name: "ひかきん", taiiku: 5, bijutsu: 5, doutoku: 5 }
console.log(seisekibo[0])

//要素の数
console.log(seisekibo.length)

//配列の要素の数だけループする
for (let i = 0; i < seisekibo.length; i++) {
  console.log(i + "番目の要素は", seisekibo[i])
}

//一番最後の要素にアクセス
console.log(seisekibo[seisekibo.length - 1])

//要素の追加と削除
const aisatsu = ["おはよう", "こんにちは"]
aisatsu.push("こんばんは") //要素の追加
console.log(aisatsu)

//削除
const konbanwa = aisatsu.pop()
console.log(aisatsu)
console.log(konbanwa)
