//  /user와 /feed 라는 하위 url 주소를 만들어서 웹서버가 정보를 전달하는 프로그램 만들기


const http = require("http");

// url 모듈 로딩해서 웹서버 만들기
const url = require("url");

// 요청과 응답을 인풋으로 받아서 처리하는 서버 만들기
http.createServer((req, res) => {

    // url 모듈을 가지고 요청데이터(req)로 받은 url 주소 경로 이름인 pathname을 얻어낸다.
    const path = url.parse(req.url, true).pathname;
    res.setHeader("content-type", "text/html")

    // /user, /feed에 해당하는 컨텐츠를 준비해야한다. 
    //  사이트 이용자가 /user라고 세부주소를 입력한 경우
    if (path === "/user"){
        res.end("[user] name : andy, age : 30");
    }
    else if (path === "/feed"){
        res.end(`<meta charset="UTF-8">
        <ul>
        <li>sum1</li>
        <li>sum2</li>
        <li>sum3</li>
        </ul>`);
    }

    // 잘못된 세부주소 입력시 띄울 메세지
    else {
        res.statusCode = 404;
        res.end("page not found")
    }
}).listen("3000", () => console.log("세부주소까지 해보기"));