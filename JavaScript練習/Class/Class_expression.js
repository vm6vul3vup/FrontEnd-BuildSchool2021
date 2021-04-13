const Rect = class {
    constructor(height, width) {
    this.name ='四邊形';
    this.height = height;
    this.width = width;
    }
    get area() {
    return this.height * this.width;
    }
    Area() {
    return this.height * this.width;
    }
   }
   var rect = new Rect(4, 5);
   console.log(rect);
   console.log(rect.area);
   console.log(rect.Area());