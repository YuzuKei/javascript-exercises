const removeFromArray = function(arr, ...arg) {
    
    for (let x = 1; x < arguments.length; x++) {
        
        for (let i = 0; i < arr.length; i++) {
            if (arguments[x] === arr[i]) {
                arr.splice(i,1);
                i--;
            }
        }
        
    }
    return arr;
};



// Do not edit below this line
module.exports = removeFromArray;
