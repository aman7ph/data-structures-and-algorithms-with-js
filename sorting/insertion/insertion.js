function insertion(array) {
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];

        for (let j = i; j > 0; j--) {
            if (temp < array[j - 1]) {
                array[j] = array[j - 1];
                array[j - 1] = temp;
                temp = array[j - 1];
            }
        }
    }

    return array;
}
console.log(insertion([4, 2, 6, 5, 1]));
