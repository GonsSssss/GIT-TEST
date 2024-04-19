// 웹 프로토콜을 불러오기위해 require함수를 이용해서 http모듈을 불러왔다.
const http = require("http");

// 불러온 http모듈로 서버를 만들겠다.
// 서버는 요청과 응답을 받아서 작업을 수행하는 함수로 구성되어있다.
const server = http.createServer((req, res) => {

    // 받아온 응답은 html형태의 데이터라고 인식시킴
    // 요청과 응답으로 시작된 서버라는 함수가 모두 실행되면 화면에 ok라고 출력하기
    res.setHeader("content-Type", "text.html");
    res.end("ok");
});
// 서버함수가 전부 정상적으로 실행된 경우 포트 3000번을 부여하고 "ok, start server" 메세지 출력
server.listen("3000", () => console.log("ok, start server"));

