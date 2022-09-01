// // // // const cars=new Map()
// // // // cars.set("telugu",80)
// // // // cars.set("hindi",90)
// // // // cars.set("English",94)
// // // // cars.set("Science",80)
// // // // cars.set("Social",70)
// // // // var x=cars.get("English")
// // // // //console.log(x)
// // // //     console.log(cars.has("Biology"))

// // // // let text = "The rain in SPAIN stays mainly in the plain";
// // // // let result = text.match(/ain/g);
// // // // console.log(result.length)
// // // let str="ababanabajsn"
// // // let x=spilt("")
// // // let m=m.search("a")

// // // const myArray = [[]];
// // // const height = 5;
// // // const width = 5;
// // // let c=10
// // // for (let i= 0; i < height; i++) {

// // // if (i> 0) myArray.push([])
// // // for (let j = 0; j < width; j++) {
// // //     myArray[i][j] = c;
// // //     c+=2
// // // }

// // // }

// // //console.log(myArray)


// // let as=[[]]
// // n=3
// // c=10
// // for (let i=0;i<n;i++){
// //     if(i<=n) as.push([])
// //     for(let j=0;j<n;j++){
// //       as[i][j]=c
// //       c+=2
// //     }
// // }

// // var s ='ambababa'
// // //let x=s.match('m')
// // console.log(s.indexOf('ab'))



// // const login=(){
    
// // }







// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
//  var countHillValley = function(nums) {
//     var hillNorValley=0
//     var hill=0
//     var vally=0
//     for(var i=0;i<nums.length;i++){
//         if(((i-1)!==-1) && (i+1)>nums.length){
//         var left=i-1
//         var right=i+1
//         while((nums[i]===nums[left])&&(nums[i]===nums[right])){
//             if(((left)!==-1) && (right)>(nums.length)){
//                 if((nums[i]===nums[left])){
//                     left-=1
//                 }
//                 if((nums[i]===nums[right])){
//                     right+=1
//                 }
                
//             }
//             else{
//                hillNorValley+=1
//             }
//         }
//         if((nums[i]>nums[right])&&(nums[i]>nums[left])){
//             hill+=1
//         }
//         else{
//             vally+=1
//         }
//         }
//        else{
//         hillNorValley+=1 
//        }
//         }   
// };

// const fib =(n,memo={}) =>{
//  if(n in memo) return memo[n]
//  if(n<=2) return 1
//  memo[n]=fib(n-2,memo)+fib(n-1,memo)
//  console.log(memo[n])
//  return memo[n]
// }
//console.log(fib(4))
//console.log(fib(5))
//console.log(fib(6))
//console.log(fib(7))
//console.log(fib(8))
//console.log(fib(50))
//1 1 2 3 5 8 13 21 
// const grid=(r,c,memo={})=>{
//  let key = r +","+c
//    if(key in memo){
//     return memo[key]
//    }
//    if(r===0 || c===0) return 0
//    if(r===1 && c===1) return 1
//    memo[key]=grid(r,c-1,memo)+grid(r-1,c,memo)
//    return memo[key]
// }
// console.log(grid(18,18))
// const canSum = (targetSum,numbers,memo={}) => {
//     if(targetSum in memo) return memo[targetSum];
//     if(targetSum ===0) return true;
//     if(targetSum<0) return false;
//     for(let num of numbers){
//        const remainder=targetSum-num
//       if(canSum(remainder,numbers,memo)=== true){
//         memo[targetSum]=true;
//          return true;
//     }
// }
//     memo[targetSum]=false;
//     return false;
// }
// console.log(canSum(7,[2,4]))
// const howSum = (targetSum,numbers,memo={}) => {
//     if(targetSum in memo) return memo[targetSum];
//     if(targetSum===0) return [];
//     if(targetSum<0) return null;
//     for(let num of numbers){
//        const remainder=targetSum-num
//        const remainderResult=howSum(remainder,numbers,memo)
//       if(remainderResult!==null){
//         memo[targetSum] = [...remainderResult,num]
//         return memo[targetSum]
//     }
// }
// memo[targetSum]=null
//     return memo[targetSum]
// }
// console.log(howSum(300,[7,14]))

// //BST 
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
}

var s = new BinarySearchTree()
s.insert(10)
s.insert(5)
s.insert(15)
s.insert(2)
console.log(s)

