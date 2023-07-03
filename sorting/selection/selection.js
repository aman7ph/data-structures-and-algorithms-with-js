function section(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }
        if (i !== min) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }

    return array;
}

console.log(section([4, 2, 6, 5, 1, 3, 78, 45, 89, 9, 0, 89, 33, 5678, 1]));
