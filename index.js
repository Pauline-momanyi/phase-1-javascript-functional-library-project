//Collection Functions (Arrays or Objects)
function newCollection(collection){
    if (Array.isArray(collection)){
        return collection.slice();
    }else{
        return Object.values(collection)
    }
}

function myEach(collection, callback){
    const updatedCollection = newCollection(collection);
    for (let item = 0; item<updatedCollection.length; item++){
        callback(updatedCollection[item])
    }
    return collection

}

function myMap(collection, callback){
    const updatedCollection = newCollection(collection);
    const newColl = []
    for (let item = 0; item<updatedCollection.length; item++){
        newColl.push(callback(updatedCollection[item]))
    }
    return newColl

}
console.log(myMap([1, 2, 3], function(num){ return num * 3; }))

function myReduce(collection, callback, acc){
    let updatedCollection = newCollection(collection);

    if(!acc){
        acc = updatedCollection[0]
        updatedCollection = updatedCollection.slice(1);
    }
    for (let item = 0; item<updatedCollection.length; item++){
        acc = callback(acc, updatedCollection[item], updatedCollection)
       // acc = acc + updatedCollection[item]
    }
    return acc   

}
console.log(myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10));


console.log(myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; }));


function myFind(collection, predicate){
    let updatedCollection = newCollection(collection);
    for(let item = 0; item< updatedCollection.length; item++){
        if(predicate(updatedCollection[item])){
            return updatedCollection[item]
        }
    }return undefined

}

console.log(myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));


console.log(myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; }));


function myFilter(collection, predicate){
    let updatedCollection = newCollection(collection);
    let newColl = []
    for(let item = 0; item< updatedCollection.length; item++){
        if(predicate(updatedCollection[item])){
            newColl.push(updatedCollection[item])
        }
    }return newColl
}
console.log(myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
console.log(myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; }));


function mySize(collection){
    let updatedCollection = newCollection(collection);
    return updatedCollection.length
}

//ARRAY FUNCTIONS
function myFirst(array, n){
    if (n){
        return array.slice(0,n)
    }else {
        return array[0]
    }
}
console.log(myFirst([5, 4, 3, 2, 1],2));

function myLast(array, n){
     return n? array.slice(array.length-n):array[array.length-1]
   
}
console.log(myLast([5, 4, 3, 2, 1],2));

//OBJECT FUNCTIONS
function myKeys(object){
    let newKeys = []
    for(let key in object){
        //Object.keys()
       newKeys.push(key)
    }return newKeys
    
    
}
console.log(myKeys({one: 1, two: 2, three: 3}));

function myValues(object){
    let newValues = []
    for(let value in object){
        //Object.keys()
       newValues.push(object[value])
    }return newValues
    
    
}
console.log(myValues({one: 1, two: 2, three: 3}));