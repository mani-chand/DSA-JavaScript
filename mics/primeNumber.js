function isPrime(n){
    if(n<2){
        return false;
    }
    for(var i=2;i<n;i++){
        if(n%i===0){
            return false;
        }
    }
    return true
}
function isSoPrime(n){
    if(n<2){
        return false;
    }
    for(var i=2;i<Math.sqrt(n);i++){
        if(n%i===0){
            return false;
        }
    }
    return true
}
console.log(isPrime(5))//true
console.log(isPrime(11))//true
console.log(isPrime(2))//true
console.log(`this is something fishy ${isPrime(32)}`)//false
console.log("-----------------------")
console.log(isSoPrime(5))//true
console.log(isSoPrime(11))//true
console.log(isSoPrime(2))//true
console.log(isSoPrime(32))//false

//Big - O notation is o(n) - linear