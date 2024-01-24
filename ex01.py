n, m = map(int, input().split())

icebox = []
for i in range(n):
    icebox.append(list(map(int, input())))


def dfs(i, j):
    if i <= -1 or i >= n or j <= -1 or j >= m:
        return False
    if icebox[i][j] == 0:
        icebox[i][j] = 1
        
        dfs(i, j - 1)
        dfs(i, j + 1)
        dfs(i - 1, j)
        dfs(i + 1, j)
        
        return True
    return False

cnt = 0
for i in range(n):
    for j in range(m):
        if dfs(i, j) == True:
            cnt += 1

print(cnt)
