const reverseString = function(str) {
    let x = str.split('');
    let stringArray = [];
    for (let i = 0; i < str.length; i++) {
        stringArray += x.pop();
    } 
    return stringArray.toString();
};

// Do not edit below this line
module.exports = reverseString;
