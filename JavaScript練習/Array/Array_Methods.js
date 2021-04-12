let Computer = ['CPU', 'DRAM' , 'SSD', 'Mouse'];
let comp = new Array('CPU', 'DRAM' , 'SSD','Mouse');

let Person = ['John', 35, 'john@gmail.com'];

let friends = ['David', 'Mary', 'John'];
console.log(friends);
console.log(friends.length);

friends=[]; //重新指派一個空的陣列
friends.length=0; //將length設為0

friends = ['David', 'Mary', 'John'];
friends.splice(0, friends.length); //移除N個陣列元素
console.log(friends);
console.log(friends.length);

let Fruits = ['Apple', 'Banana', 'Cherry'];
let msg = "";
for(var i=0 ;i < Fruits.length;i++)
{
    msg += Fruits[i];
    // console.log(Fruits[i]);
}
console.log(msg);

msg = "";
Fruits.forEach((fruit,index) => {
    msg += fruit;
})

console.log(msg);

console.log(Fruits.join());
console.log(Fruits.join(','));
console.log(Fruits.join('-'));

Fruits.push('Orange','Banana','Cherry');
console.log(Fruits.join());

Fruits.pop();  //陣列末端移除元素
console.log(Fruits.join(','));

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];
var array3 = array1.concat(array2);
console.log(array3);

var array4 = [...array1,...array2];
console.log(array4);

console.log(Fruits.sort().reverse());

let Cars = ['BMW', 'Benz', 'Audi', 'Lexus'];
let car = Cars.find(c => c=='Benz');
console.log(car);
let index = Cars.indexOf('Audi');
console.log(index);
let idx = Cars.findIndex(c=> c=='Benz');
console.log(idx);

let Prices = [280, 320, 250, 210];
console.log(Prices.findIndex(p => p > 300));

console.log(Prices.filter(p => p > 250));

Prices.filter(function(item, index){
    if(item > 250){
        console.log(Cars[index] + "'s price is " + item + ", it's larger 250." )
        }
    });