/*
 fac(0)=1
 fac(3)=1*2*3
 fac(4)=1*2*3*4
*/
function Fac(n){
    if(n===1&&n===0){
    return 1
    }
    var sum=1
    for(var i=1;i<=n;i++){ //n=5
             sum*=i 
    }
    return sum
}
console.log(Fac(5))
console.log(Fac(1))
console.log(Fac(0)) 

//Big-O notation of factorial is o(n)-linear
