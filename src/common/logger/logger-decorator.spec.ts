import { LogDecorator } from './nest-js-logger.adapter';

class TestClass {
  @LogDecorator()
  sum(a: number, b: number): number {
    return a + b;
  }
}

describe('LogDecorator', () => {
  let consoleSpy: jest.SpyInstance;
  let testInstance: TestClass;

  beforeEach(() => {
    testInstance = new TestClass();
    consoleSpy = jest.spyOn(console, 'log');
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should log before and after calling the method', () => {
    const result = testInstance.sum(2, 3);

    expect(consoleSpy).toHaveBeenCalledWith(
      'Calling sum with arguments',
      [2, 3],
    );
    expect(consoleSpy).toHaveBeenCalledWith('sum returned', 5);
    expect(result).toBe(5);
  });

  it('should return the correct result from the method', () => {
    const result = testInstance.sum(5, 7);
    expect(result).toBe(12);
  });
});
