import sys
sys.setrecursionlimit(10000)

t = int(input())

def dfs(x, y):
    dx = [1, -1, 0, 0]
    dy = [0, 0, 1, -1]

    for i in range(4):
        nx = x + dx[i]
        ny = x + dy[i]

        if (0 <= nx <= m) and (0 <= ny <= n):
            if field[nx][ny] == 1:
                field[nx][ny] = 0
                dfs(nx, ny)

for _ in range(t):
    m, n, k = map(int, input().split())

    field = [[0] * n for _ in range(m)]

    for _ in range(k):
        x, y = map(int, input().split())

        field[x][y] = 1
    
    cnt = 0

    for i in range(m):
        for j in range(n):
            if dfs(i, j) == True:
                cnt += 1
        
    print(cnt)