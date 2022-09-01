class Node{
    constructor(val){
        this.val = val;
        this.next=null;
        this.prev=null
    }
}
class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0
    }
    push(val){
        var newNode=new Node(val);
        if(this.length===0){
            this.head=newNode
            this.tail=newNode
        }
        else{
            this.tail.next=newNode
            newNode.prev=this.tail
            this.tail=newNode
        }
        this.length+=1
    return this
    }
    print(){
        var crnt=this.head
      if(this.length===0){
        console.log(" No Nodes are present")
      }
      else{
        while(crnt){
            console.log(crnt.val)
            crnt=crnt.next
        }
      }
    }
    pop(){
        if(!(this.head)){
            console.log(" No Nodes are present ")
            return undefined
        }
        if(this.length===1){
           this.head=null;
           this.tail=null
        }
        else{
            var temp = this.tail
            this.tail=this.tail.prev 
            this.tail.next=null
            temp.prev=null
            this.length-=1
        }
        return this
    }
    shift(){
        if(this.length===0){
            console.log(" No Nodes are present ")
            return undefined
        }
        if(this.length===1){
            this.head=null
            this.tail=null
            this.length-=1
        }
        else{
            var temp=this.head
            this.head=this.head.next
            this.head.prev=null
            temp.next=null
            this.length-=1
           
        }
       return temp;
    }
    unshift(val){
        var newNode=new Node(val)
        if(this.length===0){
            this.head=newNode
            this.tail=newNode
        }
        else{
            this.head.prev=newNode
           newNode.next=this.head
           this.head=newNode
           
        }
        this.length+=1
        return this
    }
    get(pos){
        if(this.length===0){
            console.log(" No Nodes are present ")
            return undefined
        }
        var currentNode=this.head
        for(var i=0;i<this.length;i++){
             if((pos-1)===i){
                console.log(currentNode.val)
                break;
             }
             currentNode=currentNode.next
        }
        return currentNode
    }
}
var obj = new DoublyLinkedList()
obj.push(5)
obj.push(8)
obj.push(4)
obj.push(16)
obj.shift()
obj.unshift(20)
obj.print()
console.log(obj.get(3))
