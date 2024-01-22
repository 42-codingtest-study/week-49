#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> arr;

int main()
{
  int n;
  cin>>n;

  for (int i = 1; i <= n; i++)
  {
    arr.push_back(i);
  }
  sort(arr.begin(), arr.end());

  do {
    vector<int> tmp;
    for (int i = 0; i < arr.size(); i++)
    {
      tmp.push_back(arr[i]);
      cout<<tmp[i] << " ";
     }
     cout<<"\n";
  } while(next_permutation(arr.begin(), arr.end()));

  return 0;
}