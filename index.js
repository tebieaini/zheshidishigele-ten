/**
 * @fileOverview index.js - 主文件，负责启动应用程序
 * @module index
 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// 使用 body-parser 中间件解析请求体
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/**
 * @description 启动应用程序并监听指定端口
 * @param {number} port - 要监听的端口号
 */
function startServer(port) {
    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`);
    });
}

/**
 * @description 处理根路由的 GET 请求
 * @param {Object} req - 请求对象
 * @param {Object} res - 响应对象
 */
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// 启动服务器
startServer(port);
