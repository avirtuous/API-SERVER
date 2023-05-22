const express = require('express');
const app = express();
// 로그인라우트 import
const login = require('./router/login/login');
app.use('/login',login);
// 토빅라우트 import
const topic = require('./router/topic/topic');
app.use('/topic',topic);

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