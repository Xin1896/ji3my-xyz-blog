# 博客CMS管理系统设置指南

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

### 2. 在Vercel配置环境变量

1. 访问：https://vercel.com（登录你的账号）
2. 进入你的项目：**ji3my-xyz-blog**
3. 点击 "Settings" → "Environment Variables"
4. 添加两个变量：
   - Name: `OAUTH_CLIENT_ID`，Value: （你的Client ID）
   - Name: `OAUTH_CLIENT_SECRET`，Value: （你的Client Secret）
5. 点击 "Save"
6. 重新部署项目（Deployments → 最新部署 → Redeploy）

### 3. 开始使用

1. 访问：https://ji3my.xyz/admin
2. 点击 "Login with GitHub"
3. 授权应用
4. 开始写文章！

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
