#include <iostream>
#include <algorithm>
#include <queue>
#include <math.h>

using namespace std;

int arr[102][102];
int sarr[102][102];
int isvisited[102][102];
int isvisited2[102][102];

int dirX[4] = {-1, 0, 1, 0};
int dirY[4] = {0, -1, 0, 1};
int n;

void dfs(int i, int j, int (*arr)[102], int (*isvisited)[102])
{
  queue< pair<int, int> > q;

  isvisited[i][j] = 1;
  q.push(make_pair(i, j));
  
  while (!q.empty())
  {
    pair<int, int> cur = q.front();
    q.pop();

    for (int idx = 0; idx < 4; idx++)
    {
      int newX = cur.first + dirX[idx];
      int newY = cur.second + dirY[idx];
      if (newX < 0 || newX >= n || newY < 0 || newY >= n)
      {
        continue;
      }
      if (isvisited[newX][newY] == 1)
      {
        continue;
      }
      if (arr[cur.first][cur.second] != arr[newX][newY])
      {
        continue;
      }
      isvisited[newX][newY] = 1;
      q.push(make_pair(newX, newY));
    }
  }
}

int main()
{
  cin >> n;
  for (int i = 0; i < n; i++)
  {
    string tmp;
    cin >> tmp;
    for (int j = 0; j < n; j++)
    {
      arr[i][j] = tmp[j];
      sarr[i][j] = tmp[j];
      if (tmp[j] == 'G')
        sarr[i][j] = 'R';
    }
  }

  int cnt1 = 0;

  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < n; j++)
    {
      if (isvisited[i][j] != 0)
      {
        continue;
      }
      cnt1++;
      dfs(i, j, arr, isvisited);
    }
  }

  int cnt2 = 0;
  for (int i = 0; i < n; i++)
  {
    for (int j = 0; j < n; j++)
    {
      if (isvisited2[i][j] != 0)
      {
        continue;
      }
      cnt2++;
      dfs(i, j, sarr, isvisited2);
    }
  }
  
  cout << cnt1 << " ";
  cout<<cnt2 << "\n";
}