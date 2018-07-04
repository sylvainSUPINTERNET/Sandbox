'use strict';




/*
    METHOD
 */

function sum(nb1, nb2, callback){
    let sum = nb1 + nb2;
    callback(sum)
}


/*
    Basic
 */
sum(1,3, function(sum){
    console.log(sum);
});





/*
    Promise + method callback
 */

function sumPromise(nb1, nb2){
    return new Promise(function(resolve, reject){
        sum(nb1, nb2, function(sum){
            if(sum < 10){
                reject(sum)
            } else {
                resolve(sum)
            }
        })
    })
}

sumPromise(1,1).then(function(data){
    //case > 10
    //console.log("RESOLVED",data)
})
.catch(function(err){
    //case < 10
    //console.log("REJECTED",err)
});




/*
    Async / await (attention la fonction noté en await doit être une promise !)
 */

async function test(){
    let sum1 = await sumPromise(6,6);
    let sum2 = await sumPromise(10,10);

    return {total: {sum1, sum2}}; //if no every function are resolved, -> can get from .then else reject -> catch
}

test()
    .then(function(data){
        console.log("DATA", data)
    })
    .catch(function(err){
        console.log("ERROR", err)
    });

