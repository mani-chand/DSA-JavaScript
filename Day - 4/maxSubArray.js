const maxSubArray = (arr)=>{
    var localSum = 0
    var globalSum = -Infinity
    for(var ele of arr){
        localSum = Math.max(ele, ele+localSum)
        globalSum = Math.max(localSum,globalSum)
    }
    //console.log(globalSum)
}
maxSubArray([2,3,-8,5,4])
