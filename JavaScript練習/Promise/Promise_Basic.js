//Ex1
const promise1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve('執行成功，會呼叫ｒｅｓｏｌｖｅ方法');
    },3000);
});

promise1
    .then(result =>{
        console.log(result);
    })
    .catch(ex =>{
        console.log('Error:' + ex);
    })
    .finally(()=>{
        console.log('Promise finally done.')
    });

//Ex2
const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('執行成功，會呼叫ｒｅｓｏｌｖｅ方法');
    },3000);
});

promise2
    .then(result =>{
        console.log(result);
    })
    .catch(ex =>{
        console.log('Error:' + ex);
    })
    .finally(()=>{
        console.log('Promise finally done.')
    });

//Ex3
const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve('執行成功，會呼叫ｒｅｓｏｌｖｅ方法');
        reject("電腦出錯");
    },3000);
});

promise3.then(function(result){
    console.log("成功的回傳值：" + result);
    }, function(ex){
    console.log("失敗原因：" + ex);
    });
    console.log(promise3);