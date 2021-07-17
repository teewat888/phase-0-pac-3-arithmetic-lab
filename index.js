function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b){
    return a/b;
}
function increment(n){
    return n += 1;
}
function decrement(n){
    return n -= 1;
}

function makeInt(n) {
    if (parseInt(n) === NaN) {
        return 'NaN';
    } else {
        return parseInt(n,10);
    }
}

function preserveDecimal(n) {
    if (parseFloat(n) === NaN) {
        return 'NaN';
    } else {
        return parseFloat(n);
    }
}