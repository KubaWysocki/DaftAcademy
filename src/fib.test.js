const fib = require('./fib')

test('without arg AND zero terms', () => {
    expect(fib()).toBe(null)
    expect(fib(0)).toBe(null)
})
test('argument not valid number', () => {
    expect(fib([])).toBe(null)
    expect(fib({})).toBe(null)
    expect(fib('test')).toBe(null)
})
test('one term & two terms (extraordinary in case of this implementation)', () => {
    expect(fib(1)).toEqual([0])
    expect(fib(2)).toEqual([0,1])
})
test('logic', () => {
    expect(fib(3)).toEqual([0,1,1])
    expect(fib(5)).toEqual([0,1,1,2,3])
    expect(fib(10)).toEqual([0,1,1,2,3,5,8,13,21,34])
    expect(fib(20)).toEqual([0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181])
})