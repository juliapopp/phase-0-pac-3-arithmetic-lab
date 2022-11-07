function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function increment(n) {
    console.log(n++);
    return n++
}
function decrement(n) {
    console.log(n--);
    return n--;
}
function makeInt(n) {
    const parsed = parseInt(n, 10);
    return parsed;
}
function preserveDecimal(n) {
    const preserved = parseFloat(n);
    return preserved;
}
