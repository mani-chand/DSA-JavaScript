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
        if(current.right){
            queue.push(current.right)
        }
        else if(current.left){
          queue.push(current.left)
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
const f = new Node('f');
const g = new Node('g');
const h = new Node('h');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;
console.log(bfs2(a))