const hasPath = (graph, src, dst) => {
    // todo
    //console.log(src.charAt(0)===dst.charAt(0))
    if(src.charAt(0)===dst.charAt(0)){
      return true
    }
    for(var ele of graph[src]){
      if(hasPath(graph,ele,dst)){
        return true
      }
    }
    return false
  };  
  const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
  };
  
  console.log(hasPath(graph, 'f', 'k')); // false  