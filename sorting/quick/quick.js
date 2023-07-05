function swap(array, firstIndex, SecondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[SecondIndex];
    array[SecondIndex] = temp;
}

function pivot(array, pivotIndex = 0, lastIndex = array.length - 1) {
    let pivit = array[pivotIndex];
    let swapIndex = pivotIndex;
    for (let i = pivotIndex + 1; i <= array.length; i++) {
        if (pivit > array[i]) {
            swapIndex++;
            swap(array, swapIndex, i);
        }
    }
    swap(array, pivotIndex, swapIndex);
    return swapIndex;
}

function quick(array, left = 0, right = array.length) {
    if (left < right) {
        let pivotIndex = pivot(array, left, right);
        quick(array, left, pivotIndex - 1);
        quick(array, left + 1, right);
    }

    return array;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));
