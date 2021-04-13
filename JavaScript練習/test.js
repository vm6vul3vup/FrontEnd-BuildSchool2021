let testname = "Tom";

{
    let testname = "Tommy";
    console.log(testname);
}

console.log(testname);

// var testname = "Tom";

{
    // var testname = "Tommy";
    console.log(testname);
}

console.log(testname);

var name2 = "Tom";
let age = 30;
const height = 168;

{
    var name2 = "Tommy";
    let age = 50;
    const height = 180;
}

console.log(name2);
console.log(age);
console.log(height);

const name3 = ['Tom','Mary'];

name3.push('Jimmy');
name3.pop();
name3.pop();
console.log(name3);

function displayTime(){
    let date = new Date();
    let month = date.getMonth();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    console.log(`${date.getMonth()}:${h}:${m}:${s}`);
}

displayTime();