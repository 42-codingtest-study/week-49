#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> larger;
vector<int> smaller;

int solution(vector<vector<int>> sizes)
{
  int answer = 0;

  for (int i = 0; i < sizes.size(); i++)
  {
    if (sizes[i][0] < sizes[i][1])
    {
      larger.push_back(sizes[i][1]);
      smaller.push_back(sizes[i][0]);
    }
    else
    {
      larger.push_back(sizes[i][0]);
      smaller.push_back(sizes[i][1]);
    }
  }
  sort(larger.begin(), larger.end());
  sort(smaller.begin(), smaller.end());

  return (larger[sizes.size() - 1] * smaller[sizes.size() - 1]);
}