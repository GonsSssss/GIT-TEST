// 웹서버 모듈과 세부주소 모듈을 불러옵니다.

const express = require("express");
const url = require("url");

// express 모듈을 불러오고사용할 포트번호를 변수화한다.
const app = express();
const port = 3000;


// urlMap 으로 세부주소를 관리하는 부분이 없어졋습니다,
// 원하는만큼 app.get이면 전부 등록 가능
// 두번째 특징은 end대신 json으로 처리하면 utf-8이 기본으로 장착
// 그래서 html 태그에서 아까 utf-8 부분의 사전 태그가 없어졌다.
app.get("/",home);
app.get("/user", user);
app.get("/feed", feed);

app.listen(port, () => console.log("router refactoring"))


const home = (req, res) => {
    res.setHeader('content-Type', 'text/html; charset-utf-8')
    res.end("메인페이지 입니다")
}

const user = (req, res) => {

    // 아까 불러온 url 모듈에서 쿼리데이터 기능도 지원합니다.
    // url 모듈의 query함수를 이용해서 처리하면 됩니다.
    const userInfo = url.parse(req.url, true).query;
    res.end(`user name ===> name : ${userInfo.name}, age : ${userInfo.age}`);
}

const feed = (req, res) => {
    res.end(`<meta charset="UTF-8"
    <ul>
    <li>champagne supernova</li>
    <li>OASIS</li>
    <li>리브포레버</li>
    </ul>`)
}