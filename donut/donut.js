//문제: donut
//0. 문제 이해 : 
//1. 시간 복잡도 확인: 
//2. 적용 알고리즘 확인: 
//3. 맞는 자료구조 확인: 
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution([[2, 3], [4, 3], [1, 1], [2, 1]]);
solution([[4, 11], [1, 12], [8, 3], [12, 7], [4, 2], [7, 11], [4, 8], [9, 6], [10, 11], [6, 10], [3, 5], [11, 1], [5, 3], [11, 9], [3, 8]]);
function solution(edges) {
    let myMap = new Map();

    for (let [a, b] of edges) {
        if (!myMap.has(a)) myMap.set(a, [0, 0]);
        if (!myMap.has(b)) myMap.set(b, [0, 0]);

        myMap.get(a)[0] += 1;
        myMap.get(b)[1] += 1;
    }
    // console.log(myMap);

    let result = [0, 0, 0, 0];

    for (let [key, value] of myMap) {
        // console.log(result)
        if (value[0] >= 2 && value[1] === 0) {
            result[0] = key;
        } else if (value[0] === 0 && value[1] >= 1) {
            result[2] += 1;
        } else if (value[0] === 2 && value[1] >= 2) {
            result[3] += 1;
        }
    }


    if (myMap.has(result[0])) {
        result[1] = myMap.get(result[0])[0] - result[2] - result[3];
    } else {
        result[1] = 0; 
    }
    // console.log(result)
    return (result);
}