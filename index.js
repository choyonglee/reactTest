// express 라이브러리 가져오기
const express = require('express')
const app = express()
const port = 5000

// body의 값을 받아올수 있게 선언
const bodyParser = require('body-parser');

// 배포용과 개발용 config를 서로 다르게 읽어오게 바꿈
const config = require('./config/key');

// user 스키마 데이터 베이스 보델을 사용할수 있게 선언
const { User } = require('./models/user');

// bodyParser 보내지는 데이터를 받아서 분석할수 있게 하는 코딩
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}))

// 분석해서 가져올때의 데이터 타입
// application/json
app.use(bodyParser.json());

// mongodb 라이브러리 가져오기
const mongodb = require('mongoose')
mongodb.connect(config.mongoURI,             
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log('!!에러!!'+err))

// 라우터1
app.get('/', (req, res) => res.send('안녕하세요 NODE + REACT 입니다'))

// 라우터2
app.post('/register', (req, res) => {
    /*
        회원 가입 할때 필요한 정보들을 client에서 가져오면 그것들을 데이터 베이스에 넣어준다
    */
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({
            success: true
        })
    })

}) 

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
