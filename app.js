const express = require('express');
const app = express();
const port = 8080; // 사용할 포트 번호

// 정적 파일 제공 (HTML, CSS, JavaScript 등을 저장하는 디렉토리 지정)
app.use(express.static('public'));

// GET 요청 처리
app.get('/', (req, res) => {
  const path = require('path').join('./public/index.html', 'index.html');
  res.sendFile(path);
});

// POST 요청 처리
app.post('/post', (req, res) => {
  res.send('안녕하세요! 이것은 POST 요청입니다.');
});

// 서버 시작
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});