#include <string>
#include <vector>
#include <math.h>
#include <iostream>
#include <string.h>
#include <algorithm>

using namespace std;

int eratos[9999999];

void eratosFunc()
{
    for (int i = 2; i <= sqrt(10000000); i++)
    {
        if (eratos[i] == 0)
            continue;
        for (int j = i*i; j <= 10000000; j+=i)
        {
            eratos[j] = 0;
        }
    }
}

int solution(string numbers) {
    int answer = 0;
    memset(eratos, 1, sizeof(int) * 10000000);
    eratos[1] = 0;
    eratos[0] = 0;
    
    eratosFunc();
    
    vector<char> v;
    vector<int> nums;
    
    for (int i = 0; i < numbers.size(); i++)
    {
        v.push_back(numbers[i]);
    }
    sort(v.begin(), v.end());
    
    do {
        string temp = "";
        for (int i = 0; i < v.size(); i++)
        {
            temp.push_back(v[i]);
            nums.push_back(stoi(temp));
        }
    } while (next_permutation(v.begin(), v.end()));
    
    sort(nums.begin(), nums.end());
    nums.erase(unique(nums.begin(), nums.end()), nums.end());
    
    for (int i = 0; i < nums.size(); i++)
    {
        if (eratos[nums[i]] != 0)
        {
            //cout<<nums[i] << " ";
            answer++;
        }
    }
    cout<<answer;
    
    return answer;
}