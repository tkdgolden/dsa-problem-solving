// add whatever parameters you deem necessary
function isSubsequence(smallString, bigString) {
    // declare small and big pointers
    let smallPointer = 0;
    let bigPointer = 0;

    // while small and big pointers still within their strings
    while (smallPointer < smallString.length && bigPointer < bigString.length) {
        // compare letters at pointers
        if (smallString[smallPointer] === bigString[bigPointer]) {
            // if true move small pointer
            smallPointer++;
        }
        else {
            // if false move big pointer
            bigPointer++;
        }
    }

    // if small pointer went past small string return true
    if (smallPointer >= smallString.length) return true;

    // else default is false, didn't make it through
    return false
}

module.exports = isSubsequence;