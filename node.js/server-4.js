
// 웹서버 안에 세부주소구현하기 예제
const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    // 사용자가 세부경로를 입력하여 세부경로 안의 컨텐츠를 "요청" 한다.
    // 불러온 url 모듈 기능으로 사용자로부터의 요청을 처리할 수 있다.
    const path = url.parse(req.url, true).pathname;
    // charset=utf-8 는 한글포함 다국어 지원.
    res.setHeader("Contetn-Type", "text/html; charset=utf-8")

    if (path === "/user") {
        user(req, res)
    }
    else if (path === "/feed") {
    feed(req, res)
    }

    // 틀린, 없는 주소 입력 시
    else {
    ERR(req, res);
    }
    })
.listen("3000", () => console.log("javascript"));

// 아래 출력 결과물을 네이버 웹툰의 쿼리데이터 원리를 사용하여
// 쿼리데이터에 따른 달라진 컨텐츠를 출력할 수 있는가?
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

const ERR = (req, res) => {
    res.statusCode = 404;
    res.end('404 ERROR')
}

