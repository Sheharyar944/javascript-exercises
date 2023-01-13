// const removeFromArray = function() {
    
    
//     let array = arguments[0];

//     for(let i=1; i<arguments.length; i++){
//         for(let j=0; j<array.length; j++){
//         if (arguments[i] === array[j]) { 
//              x = array.splice(j,1);}
//             }
//     }
//     return array;
// };


// const removeFromArray = function(...arg) {
    
//     let array = arg[0];
// let newarray = [];
//     array.forEach(element => {

//         if(!arg.includes(element)) {
// newarray.push(element);
//         }
        
//     });
  
//     return newarray;
// };

const removeFromArray = function(...arg) {
    
let arr=arg[0];
return arr.filter(element => (!arg.includes(element)));

   
};









// Do not edit below this line
module.exports = removeFromArray;
