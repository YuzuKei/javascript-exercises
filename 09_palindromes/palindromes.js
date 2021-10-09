const palindromes = function (str) {
    const reverseString = function(str) {
        let x = str.split('');
        let stringArray = [];
        for (let i = 0; i < str.length; i++) {
            stringArray += x.pop();
        } 
        return stringArray.toString();
    };

    let reversedString = reverseString(str).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split(" ").join('');
    let filteredString = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split(" ").join('');

    if (filteredString == reversedString) {
        console.log(filteredString);
        return true;
    } else {
        console.log(filteredString);
        return false;
    }
};

console.log(palindromes('Animal loots foliated detail of stool lamina.'))

// Do not edit below this line
module.exports = palindromes;
