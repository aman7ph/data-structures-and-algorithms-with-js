function binarySearch(array, element) {
    let start = 0;
    let end = array.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (array[mid] !== element) {
        if (array[mid] > element) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = Math.floor((start + end) / 2);

        if (end < 0 || start >= array.length) {
            return -1;
        }
    }

    return mid;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8));
