// add whatever parameters you deem necessary
function separatePositive(array) {
    // iterate from right side
    for (let i = array.length - 1; i >= 0; i--) {
        // if negative
        if (array[i] < 0) {
            // splice
            const temp = array.splice(i, 1);
            // push
            array.push(temp[0]);
        }
    }

    return array;
}

module.exports = separatePositive;