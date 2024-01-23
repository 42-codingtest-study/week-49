
//0. 문제 이해 :
//1. 시간 복잡도 확인:
//2. 적용 알고리즘 확인:
//3. 맞는 자료구조 확인:
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);
function solution(input) {
    const N = +input[0]; 
    let size = 0;class MaxHeap {
        constructor() {
            this.heap = [null];
        }
        heap_push(value) {
            // 아래에서 위로
            this.heap.push(value);
            let currentIndex = this.heap.length - 1;
            let parentIndex = Math.floor(currentIndex / 2);
            while (parentIndex !== 0 && this.heap[parentIndex] < value) {
                const temp = this.heap[parentIndex];
                this.heap[parentIndex] = this.heap[currentIndex];
                this.heap[currentIndex] = temp;
                currentIndex = parentIndex;
                parentIndex = Math.floor(currentIndex / 2);
            }
        }
        heap_pop() {
            if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우
            // 위에서 아래로
            let returnValue = this.heap[1];
            this.heap[1] = this.heap.pop();
            let currentIndex = 1;
            let leftIndex = 2;
            let rightIndex = 3;
            while (
                this.heap[currentIndex] < this.heap[leftIndex] ||
                this.heap[currentIndex] < this.heap[rightIndex]
            ) {
                const temp = this.heap[currentIndex];
                if (this.heap[leftIndex] < this.heap[rightIndex]) {
                    this.heap[currentIndex] = this.heap[rightIndex]
                    this.heap[rightIndex] = temp;
                    currentIndex = rightIndex;
                } else {
                    this.heap[currentIndex] = this.heap[leftIndex]
                    this.heap[leftIndex] = temp;
                    currentIndex = leftIndex;
                }
                leftIndex = currentIndex * 2;
                rightIndex = leftIndex + 1;
            }
            return returnValue;
        }
        heap_return() {
            return this.heap;
        }
    }
    const priorityQ = new MaxHeap();

    for (let i = 1; i <= N; i++) {
        priorityQ.heap_push(+input[i]);
    }
    
    let answer = 0;
    //매번 제일 작은거 두개 빠고 그거 더해서 넣는데 그게 정렬되어야됨 => 매번 최선의 해가 최솟값 2개 더하는 거임
    while (size > 1) {
        const first = priorityQ.heap_return()[1];
        priorityQ.heap_pop();
        const second = priorityQ.heap_return()[1];
        priorityQ.heap_pop()
        let sum = first + second;
        answer += sum;
        priorityQ.heap_push(sum);
        console.log(priorityQ.heap_return());
    }

    console.log(answer);
}
