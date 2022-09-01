// // // // bake your code here
// // // function prob(t,a){
// // //     var del=0
// // //     let nums=[]
// // //     var c=0
// // //     while(t>=c){
// // //         if(a.length<=2){
// // //             return 0
// // //         }
// // //         for(let i=0;i<a.length;i++){
// // //             var n=a[i]
// // //           nums.push([...nums,{a[i]:0}])
// // //           //console.log(])
// // //         }
// // //         c+=1
// // //     }
// // //     console.log(nums)
   
// // // }
// // // t=1
// // // a=[3,5,4,6,8]
// // // prob(t,a)

// // // const factorial=(num)=>{
// // //     if(num===1){
// // //         return 1
// // //     }
// // //     return num * factorial(num-1)
// // // }
// // // const sumOfN=(num)=>{
// // //     if(num===1){
// // //         return 1
// // //     }
// // //     return num + sumOfN(num-1)
// // // }

// // // const linearSearch=(arr,key)=>{
// // //     for(var i=0;i<arr.length;i++){
// // //         if(arr[i]===key){
// // //             return i
// // //         }    
// // //     }
// // //     return -1
// // // }
// // // const binarySearch=(arr,key)=>{
// // //    var mid=Math.floor((arr.length/2))
// // //    var flag=true
// // //    var high=arr.length
// // //    var low=0
// // //    var i=0
// // // //Math.floor()=>to get in 
// // //     return -1
// // // }
// // // arr=[1,2,3,4,5]
// // // key=4/*
// // // console.log(binarySearch(arr,key))
// // // console.log(linearSearch(arr,key))
// // // console.log(factorial(5))
// // // console.log(sumOfN(5))*/
// // // //slice(1) => removes 1st 1 index
// // // //slice(2) => removes 1st 2 index

// // // //Bubble Sort
// // // const bubbleSort=(arr)=>{
// // //     for(var i=arr.length;i>0;i--){
// // //         for(var j=0;j<(i-1);j++){
// // //             if(arr[i]>arr[j]){
// // //                 console.log(arr[i],arr[j])
// // //                 temp=arr[j];
// // //                 arr[j]=arr[i]
// // //                 arr[i]=temp
// // //                 console.log(arr[i],arr[j])
// // //             }
// // //         }
// // //     }
// // //     return arr
// // // }
// // //console.log(bubbleSort([5,6,4,3,8,1,10]))
// // //selection Sort
// // const SelectionSort= arr =>{
// //     let min
// //     let temp
// //     for(var i=0;i<arr.length;i++){
// //         min=i
// //         for(var j=(i+1);j<arr.length;j++){
// //               if(arr[j]<arr[min]){
// //                 min=j
// //               }
// //         }
// //          if(i!=min){
// //              temp=arr[i]
// //              arr[i]=arr[min]
// //              arr[min]=temp
// //          }
// //     }
// //    return arr
// // }
// // console.log(SelectionSort([5,6,4,3,8,1,10]))

// //Single LinkedList
// class Node{
//   constructor(val){
//     this.head=null
//     this.val=val
//     this.next=null
//   }
// }
// class Linkedlist{
 
//   constructor(val){
//     this.head=null
//     this.tail=null
//     this.length=0
//   }
//   push(val){
//    var nprt=new Node(val)
//     if(this.head===null){
//       this.head=nprt
//       this.tail=this.head
//     }
//     else{
//       this.tail.next=nprt
//       this.tail=nprt
//     }
//     this.length+=1
//     return this
//   }
//   print(){
//     var current = this.head
//     while(current){
//       console.log(current)
//       current=current.next
//     }
//     return this.val
//   }

//   pop(){
//     if(this.head===null){
//       return null
//     }
//    var temp=this.head
//    var newTail=temp.next
//    while(temp.next!==null){
//     newTail=temp
//     temp=temp.next
//    }
//    console.log(temp)
//    console.log(newTail)
//    this.tail=newTail
//    this.tail.next=null
//   }

// }
//  var obj=new Linkedlist()
//  obj.push(5)
//  obj.push(10)
//  obj.push(15)
//  //console.log(obj)
//  console.log(obj.print())
//  obj.pop()
//  console.log(obj.print())

// class Node{
//   constructor(val){
//     this.head=null
//     this.val=val
//     this.next=null
//   }
// }
// class Linkedlist{
//   constructor(){
//     this.head=null
//     this.tail=null
//     this.length=0
//   }
//   push(val){
//    var nprt=new Node(val)
//     if(this.head===null){
//       this.head=nprt
//       this.tail=nprt
//     }
//     else{
//       this.tail.next=nprt
//       this.tail=nprt
//     }
//     this.length+=1
//     return this
//   }
//   print(){
//     this.current=this.head
//     if(this.head===null){
//       console.log("No Nodes found")
//     }
//     else{
//          for(var i=0;i<this.length;i++){
//             console.log(this.current.val)
//             this.current=this.current.next
//           }
//     }
//   }
//   pop(){
//     this.current=this.head
//     if(this.head===null){
//       console.log("No Nodes found")
//     }
//     else{
//          for(var i=0;i<(this.length-2);i++){
//             this.current=this.current.next
//           }
//          // console.log(" pop "+this.current.val)
//           this.tail=this.current
//           this.length-=1
//     }
//   }
//   shift(){
//     if(this.head===null){
//       console.log(" No nodes found")
//     }
//     else{
//       this.head=this.head.next
//       this.length-=1
//     }
//   }

//   unshift(val){
//     var nrt=new Node(val)
//     if(!(this.head)){
//       this.head=val
//       this.tail=val
//     }
//     else{
//         nrt.next = this.head
//         this.head=nrt
//     }
//     this.length+=1
//     return this
//   }
//   Linkget(pos){
//     var current=this.head
//     if(!(this.head)){
//       print("No Nodes")
//     }
//     else{
//       for(var i=0;i<(this.length);i++){
//           if((pos-1)===i){
//             console.log(current.val)
//             break;
//           }
//           current=current.next
//       }
//     }
//     return current
//   }
//   listset(pos,val){
//     if(!(this.head)){
//       print("No Nodes")
//     }
//     else{
//       this.current=this.head
//       for(var i=0;i<(this.length);i++){
//           if((pos-1)===i){
//             this.current.val=val
//           }
//           this.current=this.current.next
//       }
//     }
//   }
//  insert(pos,val){
//   if(pos>this.length | pos<0){return false}
//   if(pos===this.length){
//     this.push(val)
//     return true
//   }
//   if(pos===0){
//     this.unshift(val)
//     return true
//   }
//   else{
//     var nt=new Node(val)
//     var prev= this.Linkget((pos-1))
//     var temp=prev.next
//     prev.next=nt
//     nt.next=temp
//     this.length+=1

//     return true
//   }
//  }
//  remove(pos){
//   if(pos>this.length | pos<0){return false}
//   if(pos===this.length){
//     this.push(val)
//     return true
//   }
//   if(pos===0){
//     this.unshift(val)
//     return true
//   }
//   else{
//     //var nt=new Node()
//     var prev= this.Linkget((pos-1))
//     var removed=prev.next
//     prev.next=removed.next
//     this.length-=1
//     return removed
//   }
//  }
//  reverse(){
//   var node = this.head;
//   this.head = this.tail;
//   this.tail = node;
//   var next;
//   var prev = null;
//   for(var i = 0; i < this.length; i++){
//     next = node.next;
//     node.next = prev;
//     prev = node;
//     node = next;
//   }
//   return this;
//  }
// }
// obj=new Linkedlist();
// obj.push(5)
// obj.push(40)
// obj.push(10)
// obj.push(15)
// //obj.print()
// obj.unshift(20)
// //obj.print()
// //obj.Linkget(3)
// // obj.listset(3,32)

// // obj.Linkget(3)
// // obj.insert(3,26)
// // obj.print()
// // obj.remove(4)
// // obj.print()
// obj.reverse()
// obj.print()

const s = x =>{
  if(x<=10){
    return x
  }
  else{
    return (s(x/10)+s(x%10))
  }
}
console.log(s(735))
















