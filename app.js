const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = 3000;

// 使用 cors 中间件
app.use(cors());

// 使用 bodyParser 中间件来解析请求体
app.use(express.json());
routes(app);


// 启动服务器，监听指定端口
app.listen(port,'127.0.0.1', () => {
    console.log(`Server is running on port ${port}`);
});
