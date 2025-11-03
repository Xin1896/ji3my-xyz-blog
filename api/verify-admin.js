export default async function handler(req, res) {
  // 从环境变量获取密码哈希
  const passwordHash = process.env.ADMIN_PASSWORD_HASH;

  if (!passwordHash) {
    // 如果没有设置密码，返回默认哈希（密码: admin123 - 请务必修改！）
    return res.status(200).json({
      hash: '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9'
    });
  }

  // 返回配置的密码哈希
  res.status(200).json({
    hash: passwordHash
  });
}
