const findDups = () =>{
    var arr = [10,5,7,6,5,2,4]
    const m = new Map();
    for(var i=0;i<arr.length;i++){
        if(m.get(arr[i])){
            return arr[i]
        }
        m.set(arr[i],true)
    }
}
console.log(findDups())