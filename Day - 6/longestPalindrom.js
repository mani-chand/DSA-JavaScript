const longestPalindrom=(s)=>{
    var ans = {}
    if(s.length===2){
        console.log(s)
       if(s.charAt(0)===s.charAt(1)){
           return 2
       }
      else{
         1 
      }
    }
  for (var i=0;i<s.length;i++){
      if(s[i] in ans){
        ans[s[i]]+=1
      }
      else{
        ans[s[i]]=1
      }
  }

    var sum = 1

   for(i in ans){
      if(ans[i]===s.length) return s.length
    if(ans[i] % 2 == 0){
      sum+=ans[i]
    }
    if(ans[i] % 2 !==0 && s.length>2){
        sum+=ans[i]-1
    }
   }
  if(sum > s.length){
      return s.length
  }
   return sum
}

console.log(longestPalindrom("manichand"))