const GBFS = (graph,source) =>{
 var queue = [source]
 while(queue.length>0){
    var current = queue.pop()
    console.log(current)
    for(var ele of graph[current]){
        queue.unshift(graph,ele)
    }
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
GBFS(graph,'a')