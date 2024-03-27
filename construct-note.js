function letterFreq(string) {
    const object = new Map();
    for (let i of string) {
        const currCount = object.get(i) || 0;
        object.set(i, currCount + 1);
    }
    return object;
}

function constructNote(message, letters) {
    // make frequency objects of message and letters
    const messageFreq = letterFreq(message);
    const lettersFreq = letterFreq(letters);

    // for item in messageObject
    for (const letter of messageFreq.keys()) {
        // check message letter in letters, return false if not
        if (!lettersFreq.get(letter)) return false;
        // check message's item count less than or equal to letter's item count, return false if not
        if (messageFreq.get(letter) > lettersFreq.get(letter)) return false;
        // continue loop if true
    };

    // return boolean default true b/c made it through the loop
    return true;
};

module.exports = constructNote;