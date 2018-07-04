'use strict';


let promise1 = new Promise(function(resolve, reject){
    resolve('promise 1 done . . .');
});

let promise2 = new Promise(function(resolve, reject){
    resolve('... promise 2 done, chain is over.');
});

/*
        INFOS
        error =>
        node:48886) UnhandledPromiseRejectionWarning: ok
(node:48886) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)
(node:48886) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

    apparait si on tente de faire a la place de resolve("done2") un reject("str"), car on n'a pas de catch donc aucune gestion d'erreur
 */


// case without error handling
promise1
    .then(function(data){
        console.log(data);
        //data est le message du resolve de la premiere promise
        //return la promise, pour chainner
        return promise2
    })
    .then(function(data){
        //data est le message du DEUXIEME resolve de la deuxieme promise
        console.log(data)
        // . . . return other promis eto chainned
    });