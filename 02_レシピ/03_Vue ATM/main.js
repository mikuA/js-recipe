Vue.createApp({
  data() {
    return {
      nyuryokugaku: 0,
      zandaka: 0,
      torihiki: [
        {
          money: "",
          date: "",
          type: "",
        },
      ],
    }
  },
  methods: {
    nyukin: function () {
      this.zandaka += Number(this.nyuryokugaku)
      this.torihiki.push({ money: this.nyuryokugaku })
      this.torihiki.push({ date: new Date() })
      this.torihiki.push({ type: "入金" })
    },
    syukkin: function () {
      this.zandaka -= Number(this.nyuryokugaku)
      this.zandaka += Number(this.nyuryokugaku)
      this.torihiki.push({ money: this.nyuryokugaku })
      this.torihiki.push({ date: new Date() })
      this.torihiki.push({ type: "出金" })
    },
  },
}).mount("#app")
