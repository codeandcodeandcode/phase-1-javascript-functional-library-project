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