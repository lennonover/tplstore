# tplstore

前端模板市场

## Details

烽火前端模板市场，供个产品线敏捷开发使用

## TODOS

- 实现用户注册登录
- 实现模板上传
- 实现模板展示
- 实现模板搜索

## Packages

- create-react-app
- redux
- Immutable.js
- react-route
- redux-logger
- redux-sage
- styed-component

## Other

操作 mongo
```
// 指定数据库存放目录启动
mongod --dbpath E:\MongoDB\data 
// 普通启动
mongod --config E:\MongoDB\mongod.cfg 
// 安装为 Windows 服务
mongod --config E:\MongoDB\mongod.cfg --install 

// 连接
mongo -port 14701
// admin 连接
mongodb://@127.0.0.1:14701

// 操作
db.goods.insert({username:'admin',password:"ued"})

```
