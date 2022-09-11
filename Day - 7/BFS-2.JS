class Node{
    constructor(value){
        this.value = value
        this.right=null
        this.left=null
    }
}
const bfs2 = (root)=>{
   if(root === null) return []
   var queue = [root]
   var result=[]
   var level = 0
   var s = { }
   while(queue.length){
      var l = queue.length
      level+=1
      for(var i=0;i<l;i++){
        //console.log(level)
        var current = queue.shift()
        //console.log(current.value)
        result=[...result,current.value]
        if(current.left){
            queue.push(current.left)
        }
        if(current.right){
          queue.push(current.right)
        }
      }
     // console.log(level,result)
      s[level]=result
     // console.log(s)
      result=[]
   }
   //console.log(s)
   return s
}
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const x = new Node('x');

a.right = b;
b.left = c;
c.left = x;
c.right = d;
d.right = e;
console.log(bfs2(a))