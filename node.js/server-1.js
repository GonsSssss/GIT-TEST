// node.js의 코딩예시 - 어떤 방식으로 서버를 만드는가 ?


// require() 함수는 웹서버 처리를 위한 http모듈을 읽는 함수입니다.
// 웹서버 처리를 위한 http 모듈을 불러서 require안에 삽입한다.
const http = require("http");

// (req, res) 는 request, response의 줄입말로 요청과 응답이다.
//  createServer()는 서버를 만드는 함수입니다.
// 서버에 쓰이는 요청과 응답처리를 위해 (req, res) 객체를 인풋으로 받습니다.
// (req, res) => {} 요청과 응답을 인풋으로 받아 작업을 처리하는 화살표함수
const server = http.createServer((req, res) => {

    // 서버 응답의 값을 설정합니다.
    // 받는 텍스트 데이터를 html문서로 해석하겠다는 뜻이다.
    res.setHeader("content-type", "text/html");

    // 응답을 종료하고(end) 결과메세지를 출력합니다.
    res.end("server")
})

// createServer()로 서버를 생성하고 뒤에 listen함수로 포트번호를 설정한다.
// 우리 서버의 포트는 3000번으로 지정하고 포트 지정까지 문제없이 동장한다면
//  준비된 "ok, server start!!" 라는 메세지를 띄워서 유저들에게 서버가 시작됨을 알린다.
server.listen("3000", () => console.log("ok, server start!!"));



