class Calc {
    // 原有功能：加法
    static add(a, b) {
        return a + b;
    }

    // TDD Step 1 實作：減法
    static subtract(a, b) {
        return a - b;
    }

    // TDD Step 2 實作：乘法
    static multiply(a, b) {
        return a * b;
    }

    // TDD Step 3 & 4 實作：除法（包含除以零的錯誤處理）
    static divide(a, b) {
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b;
    }
}

module.exports = Calc;
