class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
  static sayHi()
  {
      console.log("Hello I am a square");
  }
}

var square = new Square(2);
console.log(square.area);
square.sideLength=6;
console.log(square.area);
//square.sayHi();error
Square.sayHi();