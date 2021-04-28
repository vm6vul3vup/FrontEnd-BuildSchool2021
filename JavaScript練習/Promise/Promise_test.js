let p1 = Promise.resolve(35);
console.log(p1);

var promise1 = Promise.resolve(35);
var promise2 = Promise.resolve(promise1)
//回傳Promise { 35 }
promise2.then(function (value) {
console.log('p2解析P1 value為:' + value);
});