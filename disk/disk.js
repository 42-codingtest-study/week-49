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
function solution(jobs) {
    const minHeap = new MinHeap();
    const count = jobs.length;
  jobs.sort((a,b) => a[0]-b[0]);
  
  let time = 0;
  let complete = 0;
  let total = 0;
  
  while(jobs.length || minHeap.heap_return().length) {
    while(jobs.length) {
      if(jobs[0][0] === time) {
        minHeap.heap_push(jobs.shift());
      } else break;
    }
    
    if(minHeap.heap_return().length && time >= complete) {
      const task = minHeap.heap_pop();
      complete = task[1] + time;
      total += complete - task[0];
    }
    time++;
      
      return total / count >> 0;
    }
}