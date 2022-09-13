function partition(inputArr, fn) {
    const passArr = [];
    const failArr = [];
    for (const element of inputArr) {
        if (fn(element)) {
        passArr.push(element);
        } else {
        failArr.push(element);
        }
    }
    return [passArr, failArr];
}

function every(inputArray, predicateFn) {
for (const element of inputArray) {
    if (!predicateFn(element)) {
    return false
    }
}
return true;
}

function map(inputArray, callBackFn) {
    const outputArray  = [];
    for (const element of inputArray) {
        let mappedElement = callBackFn(element);
        outputArray.push(mappedElement);
    }
    return outputArray;
}

module.exports = {partition, every, map};