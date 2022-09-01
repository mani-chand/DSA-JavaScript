class Node{
    constructor(value){
        this.value = value
        this.right=null
        this.left=null
    }
}
class Bst{
    in(root){
        if(root===null){
            return []
        }
        const leftVals = this.pre(root.left)
        const rightVals = this.pre(root.right)
        return [...leftVals,root.value,...rightVals]
    }
    post(root){
        if(root===null){
            return []
        }
        var rightVals = this.post(root.right)
        var leftVals = this.post(root.left)
        return [...leftVals,...rightVals,root.value]
    }
    pre(root){
        if(root===null){
            return []
       }
        var leftVals = this.in(root.left)
        var rightVals = this.in(root.right)
       return [root.value,...leftVals,...rightVals]
    }
    sum(root){
        if(root===null){
            return []
       }
        var leftVals = this.in(root.left)
        var rightVals = this.in(root.right)
        var sums= [root.value,...leftVals,...rightVals]
        var sum=0
        for(var i=0;i<sums.length;i++){
            sum+=sums[i]
        }
        return sum
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
var i= new Bst()
console.log(a)

console.log(i.pre(a))
 console.log("----------------------------------")
console.log(i.post(a))
 console.log("----------------------------------")
console.log(i.in(a))
 console.log("----------------------------------")
console.log(i.sum(a))
