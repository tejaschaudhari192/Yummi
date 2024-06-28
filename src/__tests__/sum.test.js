import { sum } from "../components/sum"

test('should calc sum of two function', () => {
    const result = sum(3, 4);

    expect(result).toBe(5); //Assertion
})
