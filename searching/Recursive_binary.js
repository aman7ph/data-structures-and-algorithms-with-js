function binarySearch(array, element, start = 0, end = array.length - 1) {
    if (start > end) {
        return -1;
    } else {
        let mid = Math.floor((start + end) / 2);
        if (array[mid] === element) {
            return mid;
        } else if (array[mid] > element) {
            return binarySearch(array, element, start, mid - 1);
        } else {
            return binarySearch(array, element, mid + 1, end);
        }
    }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8));
