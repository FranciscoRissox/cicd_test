const add = require("./math"); 

test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
});

test("adds 1 + 4 does not equal 6", () => {
    expect(add(1, 4)).not.toBe(6);
});