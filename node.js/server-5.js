
const http = require("http");


const url = require("url");


http.createServer((req, res) => {

    const path = url.parse(req.url, true).pathname;
    res.setHeader("content-type", "text/html; charset=utf-8")


    if (path in urlMap){
        urlMap[path](req, res);

    }
    else {
        notFound(req, res);
    }
}).listen("3000", () => console.log("세부주소까지 해보기"));



// /user라는 세부주소에 실행될 내용을 user함수 안에 넣고 함수로 만들어서 코딩내용 대신 함수쓰기
const user = (req, res) => {
    res.end("user name ===> name : 디지털수업, age : 40");
}

const user1 = (req, res) => {
    res.end("user name ===> name : 디지털수, age : 50");
}

const user2 = (req, res) => {
    res.end("user name ===> name : 디지수업, age : 60");
}

const user3 = (req, res) => {
    res.end("user name ===> name : 디수업, age : 70");
}

const user4 = (req, res) => {
    res.end("user name ===> name : 디업, age : 80");
}


const feed = (req, res) => {
    res.end(`<meta charset="UTF-8">
        <ul>
        <li>sum1</li>
        <li>sum2</li>
        <li>sum3</li>
        </ul>`);
}

const notFound = (req, res) => {
    res.statusCode = 404;
    res.end("page not found");
}

const home = (req, res) => {
    res.end("메인페이지 입니다")
}


//  객체형 데이터셋을 정의해서 객체데이터 내부에 필요한 url을 등록하여 사용함
//  if절의 불필요한 사용을 막았음
const urlMap = {
    "/": home,
    "/user": user,
    "/user1": user1,
    "/user2": user2,
    "/user3": user3,
    "/user4": user4,
    "/feed": feed,
}