var person = {
    name: "Kevin", age: 32,
    height: 175, weight: 64
};
console.log(person);
console.log("The Object is " + person);
console.log("This Object is %o", person);
console.log(person.name);
console.log(person["age"]);
console.log("This Object is :" + JSON.stringify(person));

let keys = Object.keys(person);
let values = Object.values(person);

console.log(keys);
console.log(keys[1]);
console.log(values);

keys.forEach((item, index) => {
    console.log(item + ":" + person[item]);
});

let people = [
    { name: "Kevin", age: 32, height: 175, weight: 64 },
    { name: "Mary", age: 35, height: 163, weight: 50 },
    { name: "Gloria", age: 42, height: 152, weight: 70 },
    { name: "Jenny", age: 52, height: 172, weight: 62 }
];

people.forEach((item,index) => {
    console.log(item);
    console.log(item.name + " " + item.age + " "  + item.height + " "  + item.weight);
});

people.forEach((item,index) => {
    let keys2 = Object.keys(item);
    keys2.forEach((item2, index) => {
        console.log(index + ":" + item2 + ":" + person[item2]);
    });
});

people.forEach((item,index) => {
    let keys2 = Object.keys(item);
    let msg = index + ". ";
    keys2.forEach((item2, index) => {
        msg += item2 + ":" + person[item2] + ",";
    });
    console.log(msg);
});

var person2 = {
    name: "Kevin",
    age: 32,
    height: 175,
    weight: 64,
    bmi: function () {
    //object literal語法需要⽤用this才能存取到本⾝身屬性
    return this.weight / ((this.height / 100) ** 2);
    }
    };
    console.log(person2);
    console.log(person2.bmi());


var jsonText = JSON.stringify(person2);
console.log(typeof jsonText);
var p = JSON.parse(jsonText);
console.log(p);
console.log(typeof p);
