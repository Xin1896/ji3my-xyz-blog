# 博客CMS管理系统设置指南

## 🔒 双重安全保护
- **第一层**: 管理密码（访问admin页面需要密码）
- **第二层**: GitHub OAuth（编辑文章需要GitHub授权）

## 访问地址
配置完成后，访问：**https://ji3my.xyz/admin**

## 设置步骤

### 1. 创建GitHub OAuth App

1. 访问：https://github.com/settings/developers
2. 点击 "New OAuth App"
3. 填写信息：
   - **Application name**: `ji3my-blog-cms`
   - **Homepage URL**: `https://ji3my.xyz`
   - **Authorization callback URL**: `https://ji3my.xyz/api/callback`
4. 点击 "Register application"
5. 记下 **Client ID** 和 **Client Secret**

### 2. 设置管理密码（可选但推荐）

1. 想一个安全的管理密码
2. 访问：https://emn178.github.io/online-tools/sha256.html
3. 输入你的密码，点击"Hash"，复制SHA-256哈希值
4. 保存这个哈希值，稍后要用

**默认密码**：如果不设置，默认密码是 `admin123`（请务必修改！）

### 3. 在Vercel配置环境变量

1. 访问：https://vercel.com（登录你的账号）
2. 进入你的项目：**ji3my-xyz-blog**
3. 点击 "Settings" → "Environment Variables"
4. 添加以下变量：
   - Name: `OAUTH_CLIENT_ID`，Value: （你的Client ID）
   - Name: `OAUTH_CLIENT_SECRET`，Value: （你的Client Secret）
   - Name: `ADMIN_PASSWORD_HASH`，Value: （你的密码SHA-256哈希值）
5. 点击 "Save"
6. 重新部署项目（Deployments → 最新部署 → Redeploy）

### 4. 开始使用

1. 访问：https://ji3my.xyz/admin
2. 输入管理密码（默认: admin123）
3. 点击 "Login with GitHub"
4. 授权应用
5. 开始写文章！

## 功能说明

- ✅ 可视化编辑器
- ✅ 实时预览
- ✅ 图片上传
- ✅ 草稿管理
- ✅ 文章分类和标签

## 遇到问题？

如果遇到登录问题，检查：
1. OAuth App的回调URL是否正确
2. Vercel环境变量是否设置正确
3. 项目是否重新部署
