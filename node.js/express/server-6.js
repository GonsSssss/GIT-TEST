//설치된 express 모듈을 불러오기
const express = require("express")

//  express를 실행해서 express 함수를 만들고 이를 app에 저장했다,
const app = express();

// express 에서는 포트번호를 변수처리 합시다.
const port = 3000;

app.get("/", (req, res) => {
    res.set({"Content-Type" : "text/html; charset = UTF-8"})
    res.end("express를 써보자")
})

// 정보를 읽어들이는 것을 api 기준으로 get 이라고 한다.
// express안의 get 기능을 써서 주소가 / 
app.listen(port, () => {
    console.log (`SERVER, ${port}`)
})

