// add whatever parameters you deem necessary
function twoArrayObject(keysArray, valsArray) {
    // declare empty object
    const object = {};
    let counter = 0;
    // loop through keysArray
    for (let key of keysArray) {
        // add entry to object with corresponding val or null
        object[key] = valsArray[counter] || null;
        counter++;
    }
    // return object
    return object;
}

module.exports = twoArrayObject;