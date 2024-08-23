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
