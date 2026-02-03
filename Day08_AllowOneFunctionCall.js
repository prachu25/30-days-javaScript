// Allow One Function Call

let fn = function add(a,b,c){
    return a+b+c;
}

let once = function(fn){
    let called = 0;

    return function(...args){
        if(called == 1){
            return undefined;
        }
        called = 1;
        return fn(...args);

    }
}

let ek = once(fn);

console.log(ek(2,2,1));  // 5
console.log(ek(2,2,1));   // Undefined
