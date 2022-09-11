const jumpToLastIndex = (arr)=>{
  if(arr.length===1){
    return true
  }
  var maxIndex=0
  for(var i=0;i<arr.length;i++){
    if(maxIndex<i){
        return false
    }
    maxIndex = Math.max(maxIndex,arr[i]+i)
  }
  return maxIndex>arr[arr.length-1]
}
console.log(jumpToLastIndex([2,3,2,1,0,3]))