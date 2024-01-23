class MinHeap {
    constructor() {
        this.heap = [null];
    }
    heap_push(value) {
        // Bottom-up approach
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
        if (this.heap.length === 2) return this.heap.pop(); // Only root node is left
        // Top-down approach
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

// Example usage:
const minHeap = new MinHeap();
minHeap.heap_push(3);
minHeap.heap_push(1);
minHeap.heap_push(4);
minHeap.heap_push(2);
minHeap.heap_push(5);

console.log(minHeap.heap_return()); // Output: [null, 1, 2, 4, 3, 5]
console.log(minHeap.heap_pop());     // Output: 1
console.log(minHeap.heap_return()); // Output: [null, 2, 3, 4, 5]
