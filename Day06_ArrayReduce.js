// let arr = [1,2,3,4,5];

// let sum = arr.reduce(add);
// console.log(sum)

// function add(a,b){
//     return a+b;
// }

//--------------------

let nums = [1,2,3,4,5,6,7,8,9];

 let fun = function addition(c,d){
    return c +d;
}

let reduce = function(nums,fun,init){
    let total = init;                        // To store value 

    for(let i =0; i< nums.length; i++){
        total = fun(total, nums[i]);
    }

    return total;
}
console.log(reduce(nums, fun, 0));

