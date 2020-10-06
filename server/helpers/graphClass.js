const Graph = function (vertices = []) {
  this.vertices = vertices;
  this.adjList = new Map();
}

Graph.prototype.addVertex = function (v) {
  this.vertices.push(v);
  this.adjList.set(v, []);
}

Graph.prototype.addEdge = function (v, w) {
  this.adjList.get(v).push(w);
  this.adjList.get(w).push(v);
}

Graph.prototype.toString = function () {
  let s = '';
  for (let i = 0; i < this.vertices.length; i++) {
    s += this.vertices[i] + '-->';
    let neighbors = this.adjList.get(this.vertices[i]);
    for (let j = 0; j < neighbors.length; j++) {
      s += neighbors[j] + '';
    }
    s += '\n';
  }
  return s;
}

module.exports = Graph;