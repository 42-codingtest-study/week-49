//문제: 2075
//0. 문제 이해 : 
//1. 시간 복잡도 확인: 
//2. 적용 알고리즘 확인: 
//3. 맞는 자료구조 확인: 
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);
function solution(input) {
class MinHeap {
    constructor() {
        this.heap = [null];
    }
    heap_push(value) {

        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);
        while (parentIndex !== 0 && this.heap[parentIndex] > value) {
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = this.heap[currentIndex];
            this.heap[currentIndex] = temp;
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }
    heap_pop() {
        if (this.heap.length === 2) return this.heap.pop(); 
        let returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        while (leftIndex < this.heap.length) {
            const smallerChildIndex =
                rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[leftIndex]
                    ? rightIndex
                    : leftIndex;
    
            if (this.heap[currentIndex] <= this.heap[smallerChildIndex]) {
                break;
            }
    
            const temp = this.heap[currentIndex];
            this.heap[currentIndex] = this.heap[smallerChildIndex];
            this.heap[smallerChildIndex] = temp;
            currentIndex = smallerChildIndex;
            leftIndex = currentIndex * 2;
            rightIndex = leftIndex + 1;
        }
        return returnValue;
    }
    heap_return() {
        return this.heap;
    }
}

    const N = +input.shift();
    const priorityQ = new MinHeap();
    input.forEach((e)=> {
        e.split(" ").forEach((e) => {
            priorityQ.heap_push(+e);
            if (priorityQ.heap.length > N+1) priorityQ.heap_pop();
        })
    })
    console.log(priorityQ.heap_return()[1]);
}
