const caesar = function(message, shift) {
    let unencodedUnicode = [];
    let encodedUnicode;
    let encodedMessage = '';
    
    if (shift >= 26 || shift <= -26) {
        shift = shift % 26;
    } 
    console.log(shift);
    
    for (let i = 0; i < message.length; i++) {
        unencodedUnicode = message.charCodeAt(i);
   
        if (unencodedUnicode > 64 && unencodedUnicode <= 91) { // returns lower-case characters
            encodedUnicode = parseInt(unencodedUnicode) + shift;
            
            if (encodedUnicode <= 64) {
                encodedUnicode = encodedUnicode + 26;
                    
            } else if (encodedUnicode >= 91) {
                
                encodedUnicode = (unencodedUnicode + shift) - 26;
                console.log(encodedUnicode);
            }

        } else if (unencodedUnicode < 123 && unencodedUnicode > 96) { // returns upper-case characters
            
            encodedUnicode = parseInt(unencodedUnicode) + shift;
            
            if (encodedUnicode <= 96) {
                encodedUnicode = 123 + shift;
                console.log(encodedUnicode);
            
            } else if (encodedUnicode > 122) {
                encodedUnicode = encodedUnicode - 26;
                console.log(encodedUnicode);
            }

        } else {

            encodedUnicode = unencodedUnicode;
        } 
        
        encodedMessage += String.fromCharCode(encodedUnicode)
    
    }
    return encodedMessage;
}





// console.log(shift);
// console.log(unencodedUnicode);
// console.log(String.fromCharCode(unencodedUnicode)); 
// console.log(encodedUnicode)
// console.log(String.fromCharCode(encodedUnicode));        
// console.log(encodedUnicode);
// console.log(encodedUnicode);
// console.log('z'.charCodeAt())
// console.log(encodedMessage);
// console.log(encodedMessage);
// console.log(String.fromCharCode(42)) 
// console.log(String.fromCharCode(0141));
// console.log(String.fromCharCode(97));
// console.log('hello');
// console.log(caesar('Hello World!'))

// Do not edit below this line
module.exports = caesar;
