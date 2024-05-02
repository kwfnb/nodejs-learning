const express = require('express');
var router = express.Router();
const dataFilePath = __dirname + `/json/player.json`;
console.log(__dirname);

const utils = require('../utils');

var fs = require('fs');
// 读取数据文件，如果文件不存在则创建一个空对象
var storedObject = [];

// POST 请求：保存对象
router.post('/saveObject', (req, res) => {
    let data = '';
    const readStream = fs.createReadStream(dataFilePath , 'utf8');
    
    
    readStream.on('data', chunk => {
        data += chunk;
    });
    readStream.on('end', () => {
        storedObject = data;
    });
    // 从请求体中获取对象
    const object = req.body;
    object.id = utils.generateRandomId();
    // 保存对象到文件
    storedObject.push(object);
    

    const writeStream = fs.createWriteStream(dataFilePath);
    writeStream.write(JSON.stringify(storedObject));
    writeStream.end();

    // 返回成功响应
    res.status(200).json({ message: 'Object saved successfully' });
});

// GET 请求：返回对象
router.get('/getObject', (req, res) => {
    let data = '';
    const readStream = fs.createReadStream(dataFilePath , 'utf8');
    
    readStream.on('error', (err) => {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    });

    readStream.on('data', chunk => {
        data += chunk;
    });
    readStream.on('end', () => {
        storedObject = JSON.parse(data);
        res.status(200).json(storedObject);
    });
});

module.exports = router;