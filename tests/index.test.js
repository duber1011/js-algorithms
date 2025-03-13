// this is only an example of how to write tests in the project
// you can write your own tests in the project to verify the correctness of your solution
describe('General test in the project', () => {
  it('should pass', () => {
    // 1. Arrange - Setup initial app state
    const number1 = 5;
    const number2 = 10;

    // 2. Act - Execute the code we're testing
    const result = number1 * number2;

    // 3. Assert - Check if the result is what we expected
    expect(result).toBe(50);
  });
});
