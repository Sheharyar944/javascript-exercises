const removeFromArray = function() {
    
    
    let array = arguments[0];

    for(let i=1; i<arguments.length; i++){
        for(let j=0; j<array.length; j++){
        if (arguments[i] === array[j]) { 
             x = array.splice(j,1);}
            }
    }
    return array;
};
removeFromArray()
// Do not edit below this line
module.exports = removeFromArray;
