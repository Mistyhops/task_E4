function someFunc(obj, str){
    return str in obj
}

const a = {
    a: 1,
    b: 2,
}


console.log(someFunc(a, 'c'));
