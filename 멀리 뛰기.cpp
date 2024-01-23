#include <cstring>
#include <string>
#include <vector>

using namespace std;

long long solution(int n) {
  int dp[2001], mod = 1234567;
  memset(dp, 0, sizeof(dp));
  dp[1] = 1, dp[2] = 2;
  for (int i = 3; i <= 2000; i++)
    dp[i] = (dp[i - 1] % mod + dp[i - 2] % mod) % mod;
  return dp[n];
}
