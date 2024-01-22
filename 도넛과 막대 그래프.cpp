#include <iostream>
#include <map>
#include <queue>
#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<vector<int>> edges) {
  vector<int> answer(4, 0);
  int node = -1, node_value = -1;
  map<int, int> d;
  map<int, vector<int>> graph;
  for (auto edge : edges) graph[edge[0]].push_back(edge[1]), d[edge[1]]++;
  for (auto g : graph)
    if (d[g.first] == 0 && node_value < static_cast<int>(g.second.size()))
      node = g.first, node_value = g.second.size();
  answer[0] = node;
  for (auto n : graph[node]) {
    int node_count = 0;
    int edge_count = 0;
    map<int, bool> visited;
    queue<int> q;
    q.push(n);
    visited[n] = true;
    node_count++;
    while (!q.empty()) {
      int current = q.front();
      q.pop();
      edge_count += graph[current].size();
      for (auto next : graph[current]) {
        if (!visited[next]) {
          q.push(next);
          visited[next] = true;
          node_count++;
        }
      }
    }
    if (node_count == edge_count)
      answer[1]++;
    else if (node_count - 1 == edge_count)
      answer[2]++;
    else
      answer[3]++;
  }
  return answer;
}
