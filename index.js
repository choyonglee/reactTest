// express 라이브러리 가져오기
const express = require('express')
const app = express()
const port = 5000

// mongodb 라이브러리 가져오기
const mongodb = require('mongoose')
mongodb.connect('mongodb+srv://admin1:naroc8978@node-react-test-zy0no.mongodb.net/<dbname>?retryWrites=true&w=majority',                  
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('안녕하세요 NODE + REACT 입니다'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))