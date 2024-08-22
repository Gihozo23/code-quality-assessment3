const deepNestedArray = [[[[[[[[[[[[1, 2, 3, 9]]]]]]]]]]]];
const simpleNestedArray = [1, [2], [3, [4]], 5, [6, [7, [8], [8493, 8383]], [9, 34, [5, 6, 7]]]];

const getNestedLevel = (array) => {
    if (!Array.isArray(array)) return 0;
    let maximumDepth = 1;
    array.forEach(item =>
    {
        if (Array.isArray(item)) {
            const depth = getNestedLevel(item);
            if (depth + 1 > maximumDepth) maximumDepth = depth + 1;
        }
    }
        
    )
    return maximumDepth;
}

const flattenArray = (array) => array.flat(getNestedLevel(array));
