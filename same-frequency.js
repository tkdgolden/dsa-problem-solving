function createFreq(int) {
    // convert integer to string
    const string = int.toString();
    // declare map
    const map = new Map();
    // for digit in string
    for (let digit of string) {
        // get current entry value, default 0
        const currVal = map.get(digit) || 0;
        // increment current entry value or set to 1
        map.set(digit, currVal + 1);
    }

    // return map object
    return map;
}


// add whatever parameters you deem necessary
function sameFrequency(int1, int2) {
    // create frequency map for each integer
    const map1 = createFreq(int1);
    const map2 = createFreq(int2);

    // for entry in map1
    for (let digit of map1.keys()) {
        // check val equals corresponding val in map2, return false if false
        if (map1.get(digit) !== map2.get(digit)) return false;
    }

    // return default true, checked all
    return true;
}

module.exports = sameFrequency;