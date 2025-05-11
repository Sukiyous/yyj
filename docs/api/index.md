# API参考

云药家系统提供一套完整的RESTful API，使开发者能够与系统进行交互，获取药品信息、管理处方和用户数据。

## API概述

所有API使用HTTP标准方法（GET、POST、PUT、DELETE），并返回JSON格式的响应。

基础URL：`https://api.cloudpharmacy.example.com/v1`

### 认证

所有API请求需要通过Bearer Token进行认证：

```bash
Authorization: Bearer {your_access_token}
```

获取访问令牌：

```bash
POST /auth/token
{
  "username": "your_username",
  "password": "your_password"
}
```

### 响应格式

成功响应：

```json
{
  "success": true,
  "data": {
    // 返回的数据
  }
}
```

错误响应：

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "错误描述"
  }
}
```

## API分类

系统API分为以下几类：

- [药品API](/api/medicine) - 药品信息的增删改查
- [处方API](/api/prescription) - 处方的创建、审核和管理
- [用户API](/api/user) - 用户认证和权限管理

## 速率限制

为了保护API服务，我们实施了速率限制：

- 基础账户：每分钟60次请求
- 高级账户：每分钟300次请求

超出限制时，服务器将返回429状态码。

## 示例调用

使用cURL获取药品列表：

```bash
curl -X GET \
  https://api.cloudpharmacy.example.com/v1/medicines \
  -H 'Authorization: Bearer your_access_token'
```

使用JavaScript调用API：

```javascript
async function getMedicines() {
  const response = await fetch('https://api.cloudpharmacy.example.com/v1/medicines', {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
  
  const data = await response.json();
  return data;
}
``` 