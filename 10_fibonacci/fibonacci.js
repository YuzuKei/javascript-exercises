const fibonacci = function(member) {
    if (member < 0) {
        return 'OOPS';
    } else {
    let x = 1;
    let y = 1;
    let z = 0;
    for (i = 2; i < member; i++) {
        z = x + y;
        x = y;
        y = z;
    } return y;
}
};

console.log(fibonacci(5));

// Do not edit below this line
module.exports = fibonacci;
