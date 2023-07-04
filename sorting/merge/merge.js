function merge(array1, array2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            mergedArray.push(array1[i]);
            i++;
        } else {
            mergedArray.push(array2[j]);
            j++;
        }
    }
    while (i < array1.length) {
        mergedArray.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        mergedArray.push(array2[j]);
        j++;
    }
    return mergedArray;
}

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    } else {
        let mid = Math.floor(array.length / 2);
        left = array.slice(0, mid);
        right = array.slice(mid);

        return merege(mergeSort(left), mergeSort(right));
    }
}
