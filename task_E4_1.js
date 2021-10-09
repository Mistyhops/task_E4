function someFunc(obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key, obj[key]);
        }
    }
}

const a = {
    a: 1,
    b: 2
}

const b = Object.create(a);

b.c = 3;

someFunc(b)

