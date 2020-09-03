// Add your functions here
function map(sourceArray, sourceFunction) {
    const newArray = [];
    sourceArray.forEach (value => {
        newArray.push(sourceFunction(value));
    })
    return newArray;
}

function reduce(sourceArray, sourceFunction, startingPoint) {
    let total = 0;
    if (!!startingPoint) {
        total = startingPoint;
    }
    else {
        total = sourceArray[0];
        sourceArray.shift();
    }
    sourceArray.forEach (value => {
        total = sourceFunction(value, total);
    })
    return total;
}