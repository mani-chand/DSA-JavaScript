/*Given a 0-indexed integer array nums, determine whether there exist two subarrays of length 2 with equal sum. Note that the two subarrays must begin at different indices.

Return true if these subarrays exist, and false otherwise.

A subarray is a contiguous non-empty sequence of elements within an array.*/
var findSubarrays = function(nums) {
    var s = {}
    var n = []
    for(var i=0;i<(nums.length-1);i++){
        s[i]=[nums[i],nums[i+1]]
    }
    var b = []
    var z=0
    if(nums.length%2==0){
      z=nums.length-2
    }
    if(nums.length%2!==0){
        z=nums.length-1
    }
    for(var j=0;j<z;j++){
        var sum=0
        for(var a of s[j]){
            sum+=a
       }
        b[j]=sum
     }
     console.log(b)
    const dups = new Map()
    for(var i=0;i<nums.length-1;i++){
        if(dups.get(b[i])){
            return true
        }
        dups.set(b[i],true)
    }
    return false
};

var nums = [0,0]
console.log(findSubarrays(nums))
var sum = (a) =>{
    console.log(a[0]+a[1])
  }
