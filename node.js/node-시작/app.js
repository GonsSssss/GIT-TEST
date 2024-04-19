
// express 모듈을 불러와서 get 명령어로 메인 주소에 대한 페이지 내용을 작성
const fs = require('fs');
const path = require('path')
const express = require('express')
const app = express();
const port = 3000;

// css 적용시키기
app.use(express.static('public'));

// json 데이터를 받으면 데이터를 해석해서 화면에 표시해야함
// 그래서 파일을 읽어들이는 코드를 추가하자
app.use(express.urlencoded({extended: false}))
// urlencoded는 express에서 데이터해석을 위해 사용
// {extended: false}는 데이터의 파싱방법을 지정합니다.
// 옵션이 false란 뜻은 내장된 쿼리스트링 라이브러리를 사용하여 데이터를 파싱하라는 뜻이다.

app.get('/', function (req, res) {
    // 메인 주소에 쓰일 index.html을 views 폴더에서 읽고 htmlFilePath 변수에 저장
    const htmlFilePath = path.join(__dirname, 'views', 'index.html')
    // htmlFilePath 변수를 읽어서 화면 띄움
    res.sendFile(htmlFilePath)
})
app.get('/restaurants', function (req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'restaurants.html')
    res.sendFile(htmlFilePath)
})
app.get('/recommend', function (req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'recommend.html')
    res.sendFile(htmlFilePath)
})

// post명령어로 폼태그에 입력한 정보를 json파일에 담습니다.
// 이 때, json파일에 데이터를 담는 방법이 api중 post명령어 사용입니다.
// get : 데이터읽기 post : 데이터 생성 delete : 데이터 삭제
app.post('/recommend', function (req, res) {
    // 요청객체인 req를 통해서 폼태그에 입력한 고객데이터를 가져온다.
    const retaurant = req.body;
    // 고객데이터가 저장되는 json파일의 경로입니다.
    const filePath = path.join(__dirname, 'data','restaurants.json')
    // fs 명령어로 지정된 json 파일을 읽어옵니다.
    const fileData = fs.readFileSync(filePath);
    // 읽어온 json 데이터는 JSON.parse 명령어로 편집할 수 있는 데이터 형태로 '해석' 합니다.
    const storedRestaurants = JSON.parse(fileData);
    // 해석된 데이터를 데이터셋에 추가합니다.
    storedRestaurants.push(restaurant);
    // 데이터 추가 후 다시 json형식으로 업데이트된 데이터를 원복
    fs.writeFileSync(filePath, JSON.stringify(storedRestaurants))
    // 모든 작업이 완료되면 사이트 이용자를 confirm 주소로 돌려보낸다.
    res.redirect('/confirm')
})
app.get('/confirm', function (req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'confirm.html')
    res.sendFile(htmlFilePath)
})
app.get('/about', function (req, res) {
    const htmlFilePath = path.join(__dirname, 'views', 'about.html')
    res.sendFile(htmlFilePath)
})
//  해당 서버는 포트 3000번을 점유할 것이며 성공하면 이에 대한 메세지를 출력함
app.listen(port, () => console.log(`${port}번 포트입니다.`));