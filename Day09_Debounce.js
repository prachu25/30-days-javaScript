// Debounce
/**
 * Make a function that delays running another function by t milliseconds.

    When it is called → don’t run it immediately.
    Wait for t milliseconds.
    If it is called again before time finishes → cancel the previous one.
    Only the last call should run after the waiting time.
    Pass the same arguments to the original function.
 */

let debounce = function (fn, t) {
    let timer;

    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => fn(...args), t)
    }
};

function sayHi(name) {
    console.log('Hi', name);
}

let call = debounce(sayHi, 1);

call('A');         // Cancle
call('B');        // Cancle
call('C');         // Last Call run
