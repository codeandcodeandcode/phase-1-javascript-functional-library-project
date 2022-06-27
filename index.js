function checks(el){
    if(!Array.isArray(el)) return Object.values(el)
    return el;
}

// Added myEach func 
function myEach(collection, callback){
    let c = checks(collection)
    c.forEach(e => {
        callback(e)
    });
    return collection;
}

// Added myMap func 
function myMap(collection, callback){
    let j = [];
    let c = checks(collection)
    c.forEach(e => {
        j.push(callback(e))
    });
    return j;
}

// Added myReduce func 
function myReduce(collection, callback, acc){
    if(acc==undefined) {let acc=collection[0]}
    let c = checks(collection)
    c.forEach(e => {
       acc = callback(acc, e, collection)
    });
    return acc;
}
