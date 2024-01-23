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
function solution(scoville, K) {
    const minHeap = new MinHeap();

    console.log(minHeap)
    for (const sco of scoville) {
    minHeap.heap_push(sco);
  }

  let mixedCount = 0;

  while (minHeap.heap_return().length >= 2 && minHeap.heap_return()[1]< K) {
    const first = minHeap.heap_pop();
    const second = minHeap.heap_pop();
    const mixedScov = first + second * 2;
    minHeap.heap_push(mixedScov);
    mixedCount++;
  }

  return minHeap.heap_return()[1] >= K ? mixedCount : -1;

}