const Calc = require("./Calc");

describe("Calc", () => {
    // 測試加法功能
    test("add two integers", () => {
        expect(Calc.add(2, 3)).toBe(5);
        expect(Calc.add(-1, 1)).toBe(0);
        expect(Calc.add(0, 0)).toBe(0);
    });

    // TDD Step 1: 測試減法功能 (先寫測試，預期會失敗)
    test("subtract two integers", () => {
        expect(Calc.subtract(5, 3)).toBe(2);
        expect(Calc.subtract(0, 5)).toBe(-5);
        expect(Calc.subtract(10, 10)).toBe(0);
        expect(Calc.subtract(-5, -3)).toBe(-2);
    });

    // TDD Step 2: 測試乘法功能 (先寫測試，預期會失敗)
    test("multiply two integers", () => {
        expect(Calc.multiply(3, 4)).toBe(12);
        expect(Calc.multiply(0, 5)).toBe(0);
        expect(Calc.multiply(-2, 3)).toBe(-6);
        expect(Calc.multiply(-2, -3)).toBe(6);
    });

    // TDD Step 3: 測試除法功能 (先寫測試，預期會失敗)
    // 決策：除法回傳浮點數，保留精確度
    test("divide two integers", () => {
        expect(Calc.divide(10, 2)).toBe(5);
        expect(Calc.divide(7, 2)).toBe(3.5);
        expect(Calc.divide(0, 5)).toBe(0);
        expect(Calc.divide(-10, 2)).toBe(-5);
        expect(Calc.divide(10, -2)).toBe(-5);
    });

    // TDD Step 4: 測試除以零的錯誤處理
    test("divide by zero throws error", () => {
        expect(() => Calc.divide(5, 0)).toThrow("Cannot divide by zero");
        expect(() => Calc.divide(0, 0)).toThrow("Cannot divide by zero");
    });
});
