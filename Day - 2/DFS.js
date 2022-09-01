class Node{
    constructor(val){
        this.val = val
        this.right=null
        this.left=null
    }
}
class DFS{
    dfs(root){
        if(root===null){
            return []
       }
        var leftVals = this.dfs(root.left)
        var rightVals = this.dfs(root.right)
       return [root.val,...leftVals,...rightVals]
    }
}

var a= new Node(9)
var b= new Node(20)
var c= new Node(4)
var d= new Node(7)
var e= new Node(5)
var f= new Node(15)
var g= new Node(22)
var h= new Node(8)
a.right=b
a.left=d
d.left=c
c.right=e
b.left=f
b.right=g
d.right=h
var i= new DFS()
console.log(i.dfs(a))
