let  {partition, every, map} = require('./index.js');

test("partition parts the input array appropriately", () => {
    expect(partition([1,2,3], (n) => n > 1)).toStrictEqual([[2,3],[1]]);
    expect(partition([1,2,3], (n) => n%2 === 0)).toStrictEqual([[2],[1, 3]]);
})

test("every returns false when >= 1 of the array elements does not meet the test, otherwise true", () => {
    expect(every([1,2,3], (n) => n < 3)).toStrictEqual(false);
    expect(every([1,2,3], (n) => n < 4)).toStrictEqual(true);
})

test("map alters every element of the array according to the callback function", () => {
    expect(map([1,2,3], (n) => n + 1)).toStrictEqual([2,3,4]);
})