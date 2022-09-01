const maxSubArray=()=>{
    var arr = [5,6,7,3,2,10,6]
    var sum = 0
   // var b = []
    for(var i=1;i<arr.length;i++){
       sum+=arr[i]
    }
    for(var i=0;i<arr.length;i++){
        var max = Math.abs(sum-arr[i])
       if(sum<max){
         sum=max
       }
    }
    return sum
}
console.log(maxSubArray())