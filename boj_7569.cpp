#include <iostream>
#include <queue>
#include <vector>
#include <algorithm>

using namespace std;

int m, n, h;
int arr[102][102][102]; // 3D 배열
int isvisited[102][102][102]; // 방문 배열

int dirX[6] = {0, 0, 0, 0, -1, 1};
int dirY[6] = {0, -1, 0, 1, 0, 0};
int dirZ[6] = {-1, 0, 1, 0, 0, 0};

vector<int> generate_vector(int a, int b, int c)
{
    vector<int> arr;
    arr.push_back(a);
    arr.push_back(b);
    arr.push_back(c);
    return arr;
}

int main()
{
    cin >> m >> n >> h;

    for (int hei = 0; hei < h; hei++)
    {
        for (int row = 0; row < n; row++)
        {
            for (int col = 0; col < m; col++)
            {
                cin >> arr[row][col][hei];
            }
        }
    }

    queue< vector<int> > q;

    for (int hei = 0; hei < h; hei++)
    {
        for (int row = 0; row < n; row++)
        {
            for (int col = 0; col < m; col++)
            {
                if (arr[row][col][hei] == 1)
                {
                    q.push(generate_vector(row, col, hei));
                }
                if (arr[row][col][hei] == 0)
                {
                    isvisited[row][col][hei] = -1;
                }
            }
        }
    }

    while (!q.empty())
    {
        vector<int> cur = q.front();
        q.pop();

        for (int i = 0; i < 6; i++)
        {
            int nxtR = cur[0] + dirX[i];
            int nxtC = cur[1] + dirY[i];
            int nxtH = cur[2] + dirZ[i];

            if (nxtR < 0 || nxtC < 0 || nxtH < 0 || nxtR >= n || nxtC >= m || nxtH >= h)
                continue;

            if (isvisited[nxtR][nxtC][nxtH] >= 0)
                continue;

            isvisited[nxtR][nxtC][nxtH] = 1 + isvisited[cur[0]][cur[1]][cur[2]];
            q.push(generate_vector(nxtR, nxtC, nxtH));
        }
    }

    int ans = -1;
    for (int i = 0; i < h; i++)
    {
        for (int j = 0; j < n; j++)
        {
            for (int k = 0; k < m; k++)
            {
                if (isvisited[j][k][i] == -1)
                {
                    cout << -1 << "\n";
                    return 0;
                }
                ans = max(ans, isvisited[j][k][i]);
            }
        }
    }
    cout << ans << "\n";
    return 0;
}
