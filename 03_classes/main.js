//task 1
class Selector {
   constructor(name, prop) {
       this.name = name;
       this.props = prop;
   }

   addProperty(prop) {
       this.props.push(prop);
   }
   removeProperty(prop) {
       const index = this.props.indexOf(prop);
       if (index !== -1) {
           this.props.splice(index, 1);
       }
   }
   getCSS() {
       return `${this.name} { ${this.props.join('; ')} }`;
   }
}

let name = "text_class";
let props = ["color: red", "font-weight: bold"];

let selector = new Selector(name, props);
//show props
console.log(`Props: ${selector.getCSS()}`);
//add prop
selector.addProperty("font-size: 24px");
console.log(`Props: ${selector.getCSS()}`);
//remove prop
selector.removeProperty("color: red");
console.log(`Props: ${selector.getCSS()}`);

//task 2
class Button{
   constructor(weight, height, text){
      this.weight = weight;
      this.height = height;
      this.text = text;
   }
   showBtn() {
      document.write(`<button style="width:${this.width}px; height:${this.height}px;">${this.text}</button>`);
  }
}

let button = new Button(100, 30, "Click me");
button.showBtn();

class BootstrapButton extends Button {
   constructor(width, height, text, color){
      super(width, height, text);
      this.color = color;
   }
   showBtn(){
      document.write(`<button style="width:${this.width}px; height:${this.height}px; background-color:${this.color};">${this.text}</button>`);
   }
}

let bootButton = new BootstrapButton(100, 30, "Click me", "red")
bootButton.showBtn();