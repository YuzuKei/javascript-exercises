const sumAll = function(start, end) {
    let sum = 0;
    if (start < 0 || end < 0) {

        return 'ERROR'

    } else if (start < end) {

        for (i = start; i <= end; i++) {
            sum += i;
        }
        return sum;
        
    } else if (start > end) {

        for (i = end; i <= start; i++) {
            sum += i;
        }
        return sum;

    } else {
        return 'ERROR'
    }
};

console.log(sumAll(1, 5));
// Do not edit below this line
module.exports = sumAll;
