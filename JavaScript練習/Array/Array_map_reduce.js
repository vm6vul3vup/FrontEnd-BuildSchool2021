var Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
var Prices = [280, 320, 250, 210];
//map()⽅法是對每⼀個陣列元素作運算，並將結果回傳⾄新陣列
var PricesWithTax = Prices.map(p => p * 1.05);
var CarsName = Cars.map(c => c + '.Car');
console.log(PricesWithTax);
console.log(CarsName);

var Prices = [280, 320, 250, 210];
//reduce()⽅法是對所有陣列元素作加總
console.log('總⾦額 ： ' +
Prices.reduce(function(accumulator, currentValue) {
return accumulator + currentValue;
})
);

const array1 = [0, 1, 1, 2];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));