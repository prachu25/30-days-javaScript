let createCounter = function(val){
    const n = val;
    return {
        increment(){
            return val=val+1;
        },
        decrement(){
            return val=val-1;
        },
        reset(){
            return n;
        }
    }
}

const call = createCounter(4);
console.log(call.increment());
console.log(call.reset());
console.log(call.decrement())