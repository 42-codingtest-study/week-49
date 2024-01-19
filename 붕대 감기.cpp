#include <algorithm>
#include <iostream>
#include <string>
#include <vector>

using namespace std;

int solution(vector<int> bd, int h, vector<vector<int>> attacks) {
  int ch = h;
  int lat = -1;
  for (auto at : attacks) {
    if (lat != -1) {
      ch = at[0] - lat - 1 >= bd[0]
               ? min(h,
                     ch + ((bd[0] * bd[1] + bd[2]) * (at[0] - lat - 1) / bd[0] +
                           bd[1] * (at[0] - lat - 1) % bd[0]))
               : ch = min(h, ch + (bd[1] * (at[0] - lat - 1)));
    }
    lat = at[0];
    ch -= at[1];
    if (ch <= 0) break;
  }
  return ch > 0 ? ch : -1;
}
