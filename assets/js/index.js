console.log('you can use ES6 here : )')

var log = {
  text: 'log something',
  console: function () {
    console.log(this.text)
  }
}
log.console()

const app = {
  text: 'hello world',
  index: 0,
  chars: 0,
  speed: 300,
  container: '#hero',
  init: function () {
    this.chars = this.text.length
    return this.write()
  },
  write: function () {
    let container = document.querySelector(this.container)

    container.textContent += this.text[this.index]
    console.log('current character :', this.text[this.index])
    if (this.index < this.chars - 1) {
      this.index++
      setTimeout(function () {
        app.write()
      }, this.speed)
    }
  }
}
