const Gdfs = (graph,source) =>{
    //itrative
    /*
    var stack = [source]
   while(stack.length>0){
    var current = stack.pop();
    console.log(current)
    for(ele of graph[current]){
        stack.push(ele)
    }
   }*/
   // recursive code
   console.log(source)
   for(ele of graph[source]){
    Gdfs(graph,ele)
   }
}
var graph = {
    'a' : ['c','b'],
    'b' : ['d'],
    'c' : ['e'],
    'd' : ['f'],
    'e' : [],
    'f' : []
}
Gdfs(graph,'a')