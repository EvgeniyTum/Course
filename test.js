function deepCount(a) {
    let result = a.length;

    function testOnArray(a) {
        for (let i = 0; i < a.length; i++) {
            if (Array.isArray(a[i])) {
                result += a[i].length;
                testOnArray(a[i]);
            }
        }
    }
    testOnArray(a);

    return result;
}

console.log(deepCount([1, 5, 3]));

console.log(deepCount(["1", 5, "3", ["10"]]));

console.log(deepCount([1, 2, [3, 4, [5]]]));

console.log(deepCount([]));

console.log(deepCount([[[[[[[[[]]]]]]]]]));