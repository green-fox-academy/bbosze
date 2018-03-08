'use strict';
// Post-it
// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"


class PostIt {
  backgroundColor:string;
  text: string;
  textColor: string;
  private size:number;
  static type:string = 'paper';

  constructor(background:string, txt:string, color:string) {
    this.backgroundColor = background;
    this.text = txt;
    this.textColor = color;
  }
  set setSize(size) {
    if (size < 41) {
        this.size = size
    }
  }
}

let postit1 = new PostIt('orange', 'Idea 1', 'blue');
let postit2 = new PostIt('pink', 'Awesome', 'black');
let postit3 = new PostIt('yellow', 'Idea 1', 'blue');

postit1.setSize = 40;
console.log(postit1);
