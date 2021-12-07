function add(a, b) {
    return (a + b);
};


function subtract(a, b) {
    return (a - b);
};


function multiply(a, b) {
    return (a * b);
};


function divide(a, b) {
    return (a / b);
};


function increment(n) {
    return n+1;
};

console.log (increment(259));
  

function decrement(n) {
    return n-1;
};

console.log (decrement(259));


function makeInt(n) {
    return parseInt(n,10);
}

console.log(makeInt("818"));


function preserveDecimal(n) {
    return parseFloat(n);
}
  
console.log(preserveDecimal(2.22));
