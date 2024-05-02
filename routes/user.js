const express = require('express');
var router = express.Router();
const writeSQL = require('../js/writeSQL');

router.post('/login', (req, res) => {
    writeSQL('select * from user where user_name = ? and user_password = ?', [req.body.username, req.body.password]).then(result => {
        if (result[0]) {

            // 返回成功响应
            res.status(200).json({
                msg: '登录成功',
                data: {
                    username: result[0].user_name,
                    userIdentity: result[0].user_identity
                }
            });
        }else{
            res.status(400).json({
                msg: '用户名或密码错误'
            });
        }
        
    }).catch((err)=>{
        res.status(500).json({
                msg: err
            });
    });
});

module.exports = router;