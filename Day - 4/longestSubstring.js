var lengthOfLongestSubstring = function(str) {
    str = str.replace(" ","")
    const nonrepeat=new Map()
    var localans = ""
    var globalAns=""
    var maxLen=0
    for(var char of str){
       // console.log(char)
        if(nonrepeat.get(char)){
            //console.log(char)
            nonrepeat.delete(char)
            if(localans.length>globalAns.length){
                globalAns=localans
                //console.log(char)
                //console.log(globalAns)
            }
            localans=""
            //console.log(globalAns)
            
        }
        else{
            localans+=char
            nonrepeat.set(char,true)
            //console.log(char)
            //console.log(globalAns)
        }
    }
    //console.log(nonrepeat)
    //console.log()
    maxLen+=Math.max(globalAns.length,localans.length)
    return maxLen
};
console.log(lengthOfLongestSubstring("abcabcbb"))