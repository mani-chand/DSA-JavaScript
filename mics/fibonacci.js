/*
fib(2)=[0,1]
fib(3)=[0,1,1]
fib(4)=[0,1,1,2]
fib(5)=[0,1,1,2,3]
fib(6)=[0,1,1,2,3,5]
fib(7)=[0,1,1,2,4,5,8]
*/
function fib(n){
  num1=0 
  num2=1
  sum=0
  for(var i=2;i<=n;i++){
     sum=num1+num2
     num1=num2
     num2=sum
  } 
  return sum;    
}
console.log(fib(7))

//Big-O notation = o(n)-linear
