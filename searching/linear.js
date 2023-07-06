function linearSearch(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (element === array[i]) {
            return i;
        }
    }

    return -1;
}

const countryList = [
    'Russia',
    'France',
    'Mexico',
    'United Kingdom',
    'India',
    'China',
    'Canada',
    'United Kingdom',
    'Italy',
    'Brazil',
    'Mexico',
    'India',
    'Australia',
    'Brazil',
    'United Kingdom',
];

console.log(linearSearch(countryList, 'Canada'));
