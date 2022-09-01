/*
arr[i]=2 arr1[j]=4
*/
var arr1 = "anagram"
var arr2 = "nagaram"
function freqCounter(arr1,arr2){
    if(arr1.length != arr2.length){
        return false
    }
    for(var i=0;i<arr1.length;i++){
        if(!(arr2.includes(arr1[i]))){
               return false
        }
    }
    return true
}
console.log(freqCounter(arr1,arr2)) 

