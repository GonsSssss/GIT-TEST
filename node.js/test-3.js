
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
    ERR(req, res)
}
})
.listen("3000", () => console.log("javascript"));


const user = (req, res) => {
    res.end("user name ===> name : andy, age : 30")
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

