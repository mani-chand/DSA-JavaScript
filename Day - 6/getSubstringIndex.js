const getSubstringIndex=(str)=>{
    var j = 0
    var arr = []
    for(var i=1;i<str.length;i++){
       
        if(str.charAt(j)===str.charAt(i)){
            j+=1
        }
        
        if(str.charAt(j)!==str.charAt(i)){
            j-=1
        }

    }
}