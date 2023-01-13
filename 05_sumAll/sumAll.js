const sumAll = function(a,b) {
let sum=0;

if(typeof a === 'number' && typeof b === 'number') {


if(a <0 || b <0){
    sum = "ERROR"
}

else if(b>a){

for(i=a; i<=b ; i++){
    sum=sum + i; 
}}

else{

    for(i=b; i<=a; i++){
        sum=sum + i;
    }

}}

else {return sum = "ERROR";}

return sum;
};
sumAll(123,1)
// Do not edit below this line
module.exports = sumAll;
