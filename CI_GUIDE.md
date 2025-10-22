# GitHub Actions CI 指南（含破壞與恢復建置示範）

本文件說明如何在本專案使用 GitHub Actions 進行持續整合（CI），並示範「故意破壞建置」與「恢復建置」的流程。

## CI 工作流程

- 檔案：`.github/workflows/ci.yml`
- 會在以下時機觸發：
  - push 到 `master` / `main` / `experiment/**` 分支
  - 對 `master`/`main` 的 Pull Request
- 作業系統：`ubuntu-latest`
- Node 版本矩陣：`18.x`, `20.x`
- 步驟：
  1. 檢出程式碼
  2. 設定 Node + npm 快取
  3. `npm ci`
  4. 執行 ESLint 靜態分析：`npm run lint`（有錯誤則 CI 失敗）
  5. `npm test`
  6. `npm run test:coverage`（未達 90% coverage CI 失敗）
  7. 上傳 `coverage/` 為 artifact

## 如何查看 CI 狀態

- 專案首頁（GitHub）上方徽章：CI 狀態一目了然
- Actions 分頁：可查看每次工作流程的詳細記錄與 artifacts

## 故意破壞建置（Breaking the Build）

### 也可以用覆蓋率或 ESLint 來破壞建置

1. 覆蓋率：註解掉部分測試或程式碼，讓 coverage < 90%，CI 會失敗。
2. ESLint：在程式碼中故意寫違規語法（如漏分號），CI 會失敗。

以下指令可在 Windows PowerShell（預設殼層）中執行。

1. 建立實驗分支：
```powershell
git checkout -b experiment/break-build
```

2. 新增一個會失敗的測試：
```powershell
"const Calc = require('./Calc');`n
describe('Intentional failure demo', () => {`n  test('this should fail', () => {`n    expect(1 + 1).toBe(3);`n  });`n});`n" | Set-Content -Encoding UTF8 .\Calc.break.test.js
```

3. 提交並推送（因 `.gitignore` 忽略 *.md，我們只加入 .js）：
```powershell
git add Calc.break.test.js
git commit -m "test(ci): add intentional failing test to break the build"
git push -u origin experiment/break-build
```

4. 前往 GitHub Actions 檢視該分支的 CI，應會顯示失敗（紅色）。

## 恢復建置（Restore the Build）

1. 修正剛才的測試，讓它通過：
```powershell
(Get-Content .\Calc.break.test.js) -replace "toBe\(3\)", "toBe(2)" | Set-Content -Encoding UTF8 .\Calc.break.test.js
```

2. 提交並推送：
```powershell
git commit -am "fix(ci): restore build by fixing failing test"
git push
```

3. 回到 Actions 檢視新的執行結果，應會顯示通過（綠色）。

## 備註

- 若要透過 Pull Request 模式演示，可從 `experiment/break-build` 向 `master` 建立 PR，觀察 PR 狀態在「失敗」→「修復後通過」的變化。
- 若要演示「引入程式缺陷」也可：直接修改 `Calc.js` 讓某個測試失敗，再以另一提交修復。
