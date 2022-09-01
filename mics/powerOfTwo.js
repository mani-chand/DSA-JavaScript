/*
isPowerOfTrue(0)=2**0-true
isPowerOfTrue(1)=2**0-false
isPowerOfTrue(2)=2**1-true
isPowerOfTrue(3)=2**1-false
*/
function bitPow(n){
    if(n<1){
        return false;
    }
    return (n & (n-1)) === 0
}

function isPowerOfTrue(n){
    if(n===0){
        return true;
    }
    for(var i=1;i<=n;i++){
        if(2**i===n){
            return true;
        }
    }
    return false;
}
console.log(bitPow(32))//false
console.log(bitPow(4))//true
console.log(bitPow(2))//true
console.log(bitPow(0))//true
console.log(bitPow(3))//false