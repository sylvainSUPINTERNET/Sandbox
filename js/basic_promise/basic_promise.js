'use strict';



function test(str){
    return new Promise(function(resolve, reject){
        if(str.length > 3){
            resolve({error:false, data: "Test success"})
        } else {
            reject({error:true, data: "param given should be string, with 4 chars minimum"})
        }
    })

}

// resolved
test("batte").then(function(data){
    console.log("promise resolved with success -> ", data);
}).catch(function(err){
    console.log("promise rejected -> ", err)
});

// rejected
test("b").then(function(data){
    console.log("promise resolved with success -> ", data);
}).catch(function(err){
    console.log("promise rejected -> ", err)
});