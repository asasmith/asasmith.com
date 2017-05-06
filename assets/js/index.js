console.log('you can use ES6 here : )')

const app = {
  text : "<h1>hello, world</h1>",
  index : 0,
  chars : 0,
  speed: 200,
  container : '#hero',
  init : function() {
      this.chars = this.text.length;
      return this.write();
    },
  write : function() {
    let container = document.querySelector(this.container);
    container.append(this.text[this.index]);
      console.log('current character :', this.text[this.index]);
      if (this.index < this.chars-1) {
            this.index++;
            setTimeout(function() {
	            app.write();
	          }, this.speed);
          }
    }
};

app.init();
