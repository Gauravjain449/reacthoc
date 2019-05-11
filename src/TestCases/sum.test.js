import { sum, total ,sub} from './sum'


test('Fake test', () => {
    expect(true).toBeTruthy();
});

// Unit testing
test('add 1 and 2 should be 3', () => {
    expect(sum(1, 2)).toBe(3);
});
test('subtract 1 and 2 should be -1', () => {
    expect(sub(1, 2)).toBe(-1);
});

// integration testing

test('test total', () => {
    expect(total(5, 20)).toBe("$25");
});