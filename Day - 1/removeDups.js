const removeDups=()=>{
    arr = [2,5,8,6,2,5,10]
    const m = new Map();
    var a=[]
    for(let i=0;i<arr.length;i++){
        if(!(m.get(arr[i]))){
            a.push(arr[i])
            m.set(arr[i],true)
        }          
    }
    return a
}
console.log(removeDups())