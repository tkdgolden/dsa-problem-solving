// add whatever parameters you deem necessary
function countPairs(array, sum) {
    // declare count
    let count = 0;
    // declare empty set
    const set = new Set();

    // iterate through array
    for (let i of array) {
        // find item difference
        const diff = sum - i;
        // if item difference equals item, continue loop
        if (diff !== i) {
            // if item difference in set
            if (set.has(diff)) {
                // increase count
                count++;
            }
            else {
                // else add item to set
                set.add(i);
            }
        }
    }

    return count;
}

module.exports = countPairs;