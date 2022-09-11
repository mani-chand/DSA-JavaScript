class Node{
    constructor(val){
        this.val = val;        
        this.next = null;
    }
}
const reverse = (head) => {
    var prev = null
    var curr = head
    while(curr){
        var temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    return prev
}

var a= new Node(9)
var b= new Node(20)
var c= new Node(4)
var d= new Node(7)
var e= new Node(5)
var f= new Node(15)
var g= new Node(22)
var h= new Node(8)
a.next=b
a.next.next=c
a.next.next.next=d
a.next.next.next.next=e
a.next.next.next.next.next=f
a.next.next.next.next.next.next=g
a.next.next.next.next.next.next=h
console.log(reverse(a))