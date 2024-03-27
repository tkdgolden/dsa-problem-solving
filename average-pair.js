// add whatever parameters you deem necessary
function averagePair(array, targetAverage) {
    // declare two pointers
    let left = 0;
    let right = array.length - 1;
    // declare sum
    const sum = targetAverage * 2;

    // while left is left of right
    while (left < right) {
        // add values at pointers and compare to sum
        const currSum = array[left] + array[right];
        // if same, return true
        if (currSum === sum) {
            return true;
        }
        // if greater than sum, move right to left
        else if (currSum > sum) {
            right--;
        }
        // else (less than sum), move left to right
        else {
            left++;
        }
        // continue loop
    }

    // return boolean default is false if went through loop without finding pair
    return false;
}

module.exports = averagePair;