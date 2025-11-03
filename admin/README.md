# 管理后台密码修改指南

## 当前密码
**admin123**

## 如何修改密码

### 方法一：在线生成新密码（推荐）

1. 想好你的新密码（例如：`MySecurePass2025!`）

2. 访问在线SHA-256工具：https://emn178.github.io/online-tools/sha256.html

3. 输入你的新密码，点击"Hash"

4. 复制生成的SHA-256哈希值（一长串字母数字）

5. 编辑文件 `admin/index.html`，找到第90行：
   ```javascript
   const CORRECT_PASSWORD_HASH = '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9';
   ```

6. 替换为你的新哈希值：
   ```javascript
   const CORRECT_PASSWORD_HASH = '你的新哈希值';
   ```

7. 提交并推送到GitHub：
   ```bash
   cd ~/Claude/jekyll-theme-chirpy-master
   git add admin/index.html
   git commit -m "更新管理密码"
   git push
   ```

### 方法二：使用命令行生成

```bash
# 将 YOUR_PASSWORD 替换为你的密码
node -e "const crypto = require('crypto'); console.log(crypto.createHash('sha256').update('YOUR_PASSWORD').digest('hex'));"
```

然后按照方法一的步骤 5-7 更新文件。

## 安全提示

- ✅ 使用强密码（至少12位，包含大小写字母、数字、特殊字符）
- ✅ 不要在任何地方泄露你的密码
- ✅ 定期更换密码
- ⚠️ 密码哈希存储在代码中是安全的（无法反向破解）
