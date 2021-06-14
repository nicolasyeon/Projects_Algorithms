// Reverse

function reverseArr(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}

// Rotate

function rotateArr(arr, shiftBy) {
    let t = Math.abs(shiftBy);
    while (t > 0) {

        if (shiftBy > 0) {
            let temp = arr[arr.length - 1]

            for (let i = arr.length - 1; i > 0; i--)
                arr[i] = arr[i - 1];
            arr[0] = temp;
        } else {
            let temp = arr[0];
            for (let i = 0; i < arr.length - 1; i++) {
                arr[i] = arr[i + 1];
            }
            arr[arr.length - 1] = temp;
        }
        t--;
    }
}

// Filter Range

function rangeArr(arr, min, max) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > min && arr[i] < max) {
            for (let j = i; j < arr.length - 1; j++) {
                arr[j] = arr[j + 1];
            }
        }
        arr.length = arr.length - 1;
        i--;
    }
}

// Concat

function concatArr(arr1, arr2) {
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        newArr[i] = arr1[i]
    }
    for (let i = arr1.length - 1; i < arr2.length; i++) {
        newArr[i] = arr2[i]
    }
    return newArr;
}