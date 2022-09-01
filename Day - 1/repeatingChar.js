const repeatuu=()=>{
  let str = "Manichand"
  const m = new Map();
  for(let i=0;i<str.length;i++){
    if(m.get(str.charAt(i))){
        return str.charAt(i)
    }
    m.set(str.charAt(i),true)
  }
  return null
}
console.log(repeatuu())