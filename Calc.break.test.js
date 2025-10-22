const Calc = require('./Calc');

describe('Intentional failure demo', () => {
  test('this should fail', () => {
    // expect(1 + 1).toBe(3); // 故意寫錯，讓 CI 失敗
    expect(1 + 1).toBe(2);
  });
});
