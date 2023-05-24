const express = require('express');

const dotenv = require('dotenv');
// .env settings
dotenv.config({path: '.env.local'});

const app = express();
// 로그인라우트 import
const login = require('./router/auth/login');
app.use('/auth',login);
// 토빅라우트 import
const topic = require('./router/user/join');
app.use('/user',topic);
// middleWare Fileter
const filter = require('./src/filter/filter');

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('Hello, Express')
})

app.post('/sendpost', (req, res) => {
    res.send('Hello, post Express')
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중')
})