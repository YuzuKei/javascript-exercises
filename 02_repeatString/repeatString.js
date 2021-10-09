const repeatString = function(string, num) {
    let x = '';
    if (string < 0) {
        console.log('ERROR');
        return 'ERROR';
    } else {
        
        for (let i = 0; i < num; i++) {
            x += string;
        }
        return x;
        
    }

};

// Do not edit below this line
module.exports = repeatString;
