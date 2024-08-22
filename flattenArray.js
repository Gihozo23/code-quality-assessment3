const deepNestedArray = [[[[[[[[[[[[1, 2, 3, 9]]]]]]]]]]]];
const simpleNestedArray = [1, [2], [3, [4]], 5, [6, [7, [8], [8493, 8383]], [9, 34, [5, 6, 7]]]];
const flattenArray = (array) => {
    if (!Array.isArray(array)) return 0;
    let maximumDepth = 1;
    array.forEach(item =>
    {
        if (Array.isArray(item)) {
            const depth = flattenArray(item);
            if (depth + 1 > maximumDepth) maximumDepth = depth + 1;
        }
    }
        
    )
    return maximumDepth;
}

console.log(flattenArray([1, [2, 3, [4]]]));
console.log(deepNestedArray.flat(12));
console.log(flattenArray(simpleNestedArray));
console.log(simpleNestedArray.flat(4));