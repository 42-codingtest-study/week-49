from collections import deque

n, m = map(int, input().split())

maze = []
for _ in range(n):
    maze.append(list(map(int, input())))

visited = [[0] * m for _ in range(n)]

# 상하좌우 확인
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def valid_maze(x, y):
    if x < 0 or x >= n or y < 0 or y >= m:
        return False
    elif maze[x][y] == 1 and visited[x][y] == 0:
        return True
    else: return False

def bfs(x, y):
    queue = deque()

    queue.append((0, 0))
    visited[0][0] = 1

    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if valid_maze(nx, ny):
                queue.append((nx, ny))
                maze[nx][ny] = maze[x][y] + 1
                visited[nx][ny] = 1
    
    return maze[n - 1][m - 1]

print(bfs(0, 0))