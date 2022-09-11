//itarative method
const peekElement = (arr)=>{
    var start = 0
    var end = arr.length-1
    while(start<end){
       var mid=Math.floor((start+end)/2)
       if(arr[mid]<arr[mid+1]){
        start = mid+1
       }
       else{
        end = mid
       }
    }
    return start
}
console.log(peekElement([1,5,6,7,2,3]))

//Recursive method
 var findPeakElement = function(arr) {
    var start = 0
    var end = arr.length-1
   return sol(arr,start,end)
};
const sol=(arr,start,end)=>{
  if(start>=end){
      return start
  }
    var mid = Math.floor((start+end)/2)
  if(arr[mid]<arr[mid+1]){
      return sol(arr,mid+1,end)
  }
  else{
      return sol(arr,start,mid)
  }
}