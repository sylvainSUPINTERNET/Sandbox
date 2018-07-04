'use strict';

function test(callback){
    let output = "TEST OUTPUT";
    callback(output)
}

new Promise((resolve, reject) => {
    console.log('Initial');
    resolve();
    //reject() // if we comment resolve and just use reject(), we go into every catch blocks
})
    .then(() => {
        //throw new Error('Something failed');
        throw new Error("something wrong, go to catch block");
        console.log('Do this'); //not display, because get rejected, so we go into the catch block immediatly
    })
    .catch((err) => {
        //if we log err -> return param of throw new Error()
        console.log('Do that');
    })
    .then(() => {

        test(function(output){
            console.log("oUTPUT" + output)
            if(output){
                throw new Error("error from output method (go to catch block)")
            }
        })

        //NOT EXECUTED , BECAUSE THROW NEW ERROR before so we go into catch block and display again error
        console.log('Do this, no matter what happened before');

    })
    .catch((err) => {
        console.log(err)
        console.log("again error")
    });


