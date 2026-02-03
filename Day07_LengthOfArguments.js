// RETURN THE LENGTH OF ARGUMENTS

args = [45,"Rohit","sharma"];

let length = function(...args){
    let count = 0;

    for(let i =0; i<args.length; i++){
        count++;
    }
    return count;
}
console.log(length(...args))




// Another direct way
let direct = function(...args){
    return args.length;
}
console.log(direct(...args))