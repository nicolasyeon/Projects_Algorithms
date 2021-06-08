// Push Front

function pushFront(arr, value) {
    for (let i = arr.length; i > 0; i--)
        arr[i] = arr[i - 1]
    arr[0] = value;
    return arr;
}

// Pop Front

function popFront(arr) {
    const val = arr[0];
    for (let i = 0; i < arr.length; i++)
        arr[i] = arr[i + 1];
    arr.length = arr.length - 1;
    return val;
}

// Insert At

function insertAt(arr, idx, value) {
    for (let i = arr.length; i > idx; i--)
        arr[i] = arr[i - 1]

    arr[idx] = value;
}

// Remove At

function removeAt(arr, idx) {
    toRemove = arr[idx];
    for (let i = idx; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    return toRemove;
}

// Swap Pairs

function swapPairs(arr) {
    for (let i = 0; i < arr.length - 1; i = 1 + 2) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }
}

// Remove Duplicates

function removeDuplicates(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1])
            newArr.push(arr[i])
    }
    return newArr;
}