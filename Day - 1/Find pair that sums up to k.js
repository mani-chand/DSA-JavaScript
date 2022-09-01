const sumToK=()=>{
const m = new Map()
var arr = [5,6,8,9,2,1]
var k = 12
for(var i = 0;i<arr.length;i++){
    var x = Math.abs(k - arr[i])
    if((m.get(x))){
        console.log(x,arr[i],k)
        return true
    }
    m.set(arr[i],true)
}
return false
}
console.log(sumToK())
