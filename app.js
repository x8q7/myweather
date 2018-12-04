//引入模块
const express = require('express');
const path = require("path");

//引入配置文件
const {
    HOST,
    PORT
} = require('./config.server.json');


const app = express();

// 添加static
app.use(
    '/static',
    express.static(path.join(__dirname, 'static'), {
        index: false,
        maxage: '30d'
    })
)

app.listen(PORT, () => {
    console.log(`dev server running~ ：http://${HOST}:${PORT}`)
})