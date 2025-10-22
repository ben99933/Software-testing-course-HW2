# Calc TDD 專案

[![CI](https://github.com/ben99933/Software-testing-course-HW2/actions/workflows/ci.yml/badge.svg)](https://github.com/ben99933/Software-testing-course-HW2/actions/workflows/ci.yml)

這是一個使用**測試驅動開發 (Test-Driven Development, TDD)** 方法論實作的計算器類別專案。

## 📋 專案說明

Calc 是一個簡單的計算器類別，提供四種基本運算功能：
- ➕ 加法 (add)
- ➖ 減法 (subtract)
- ✖️ 乘法 (multiply)
- ➗ 除法 (divide)

## 🛠️ 技術棧

- **程式語言**: JavaScript (Node.js)
- **測試框架**: Jest
- **開發方法**: Test-Driven Development (TDD)

## 🔁 CI（GitHub Actions）

- 本專案已設定 GitHub Actions 持續整合（見上方徽章）。
- 觸發條件：
	- push 到 master/main 或 experiment/** 分支
	- 對 master/main 的 Pull Request
- 工作流程：
	- Node 版本矩陣：18.x、20.x
	- 安裝依賴：npm ci
	- 執行測試：npm test 與 npm run test:coverage
	- 上傳 coverage/ 為 artifact

## 📦 安裝

```bash
npm install
```

## 🧪 執行測試

### 執行所有測試
```bash
npm test
```

### 執行測試並顯示覆蓋率
```bash
npm run test:coverage
```

### 監視模式（檔案變更時自動重新測試）
```bash
npm run test:watch
```

## 📊 測試結果

✅ **5 個測試套件全部通過**  
✅ **100% 程式碼覆蓋率**

```
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 Calc.js  |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
```

## 📁 檔案結構

```
hw2/
├── Calc.js              # Calc 類別實作
├── Calc.test.js         # Jest 測試檔案
├── TDD_NARRATIVE.md     # 完整的 TDD 開發敘述報告
├── package.json         # Node.js 專案設定
└── README.md            # 本檔案
```

## 📖 TDD 開發流程

本專案嚴格遵循 TDD 的紅-綠-重構循環：

1. **🔴 紅燈 (Red)**: 撰寫失敗的測試
2. **🟢 綠燈 (Green)**: 撰寫最少的程式碼使測試通過
3. **🔵 重構 (Refactor)**: 改善程式碼品質

詳細的開發過程請參閱 [TDD_NARRATIVE.md](./TDD_NARRATIVE.md)

## 🎯 功能特色

### 1. 加法 (add)
```javascript
Calc.add(2, 3)      // 回傳 5
Calc.add(-1, 1)     // 回傳 0
```

### 2. 減法 (subtract)
```javascript
Calc.subtract(5, 3)    // 回傳 2
Calc.subtract(0, 5)    // 回傳 -5
```

### 3. 乘法 (multiply)
```javascript
Calc.multiply(3, 4)    // 回傳 12
Calc.multiply(-2, 3)   // 回傳 -6
```

### 4. 除法 (divide)
```javascript
Calc.divide(10, 2)     // 回傳 5
Calc.divide(7, 2)      // 回傳 3.5（浮點數）
Calc.divide(5, 0)      // 拋出錯誤: "Cannot divide by zero"
```


這個專案展示了：
- ✅ TDD 的完整開發流程
- ✅ 如何撰寫清晰的單元測試
- ✅ 錯誤處理的測試方法
- ✅ 測試案例的設計（正數、負數、零、邊界條件）
- ✅ 程式碼重構的時機與方法
- ✅ 100% 測試覆蓋率的達成
