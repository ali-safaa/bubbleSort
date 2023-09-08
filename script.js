function bubbleSort(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

function printedArray(arr, n) {
  for (let i = 0; i < n; i++) {
    console.log(arr[i]);
  }
}

var arr = [8, 2, 10, 6, 5];
var n = arr.length;
bubbleSort(arr, n);
console.log('sorted array');
printedArray(arr, n);
