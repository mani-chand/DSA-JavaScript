
const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = createGraph(edges)
    const visited = new Map()
    var stack = [nodeA]
    while(stack.length>0){
      var current = stack.pop()
      if(current===nodeB) return true
      for(var ele of graph[current]){
             if(!(visited.get(ele))){
               stack.push(ele)
               visited.set(ele,"true")
             }      
      }
    }
    return false
  };
  const createGraph = (edges) =>{
    graph = {}
    for(var node of edges){
      let [a,b]=node
      if(!(a in graph)) graph[a]=[]
      if(!(b in graph)) graph[b]=[]
      graph[a].push(b)
      graph[b].push(a)
    }
    return graph
  }

  const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];
  
  console.log(undirectedPath(edges, 'j', 'm')) // -> true

  const edges1 = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
  ];
  
  console.log(undirectedPath(edges1, 'k', 'o'))//->false