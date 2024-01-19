#include <algorithm>
#include <iostream>
#include <queue>
#include <string>
#include <vector>

using namespace std;

int dx[4] = {1, -1, 0, 0};
int dy[4] = {0, 0, 1, -1};

int solution(vector<vector<int>> land) {
  int answer = 0;
  vector<vector<int>> visited(land.size(), vector<int>(land[0].size(), -1));
  vector<int> columnOil(land[0].size(), 0);

  for (int x = 0; x < land.size(); x++) {
    for (int y = 0; y < land[0].size(); y++) {
      if (land[x][y] == 1 && visited[x][y] == -1) {
        queue<pair<int, int>> q;
        q.push(make_pair(x, y));
        int sizeOfLand = 1;
        visited[x][y] = 1;
        vector<int> affectedColumns;

        while (!q.empty()) {
          pair<int, int> f = q.front();
          q.pop();
          affectedColumns.push_back(f.second);

          for (int k = 0; k < 4; k++) {
            int nx = f.first + dx[k];
            int ny = f.second + dy[k];
            if (nx >= 0 && nx < land.size() && ny >= 0 && ny < land[0].size() &&
                visited[nx][ny] == -1 && land[nx][ny] == 1) {
              sizeOfLand++;
              visited[nx][ny] = 1;
              q.push(make_pair(nx, ny));
            }
          }
        }

        sort(affectedColumns.begin(), affectedColumns.end());
        affectedColumns.erase(
            unique(affectedColumns.begin(), affectedColumns.end()),
            affectedColumns.end());

        for (int col : affectedColumns) {
          columnOil[col] += sizeOfLand;
        }
      }
    }
  }

  answer = *max_element(columnOil.begin(), columnOil.end());
  return answer;
}
