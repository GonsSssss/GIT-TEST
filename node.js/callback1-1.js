//  회원가입 서비스를 가정
//  회원가입 데이터를 고객이 입력
//  1. 데이터를 우리서버 db에 저장하고
//  2. 이메일을 보내고
//  3. 성공메세지를 보내는 작업을 순차적으로 하려고 합니다.
//  당연한 이야기이지만 데이터가 안들어왔는데 이메일을 보낼 수 없죠?
//  그래서 순차적인 작업이 되도록 우리가 조치해야합니다.

const DB = []

function register(user) {
    return saveDB(user, function(user) {
        return sendEmail(user, function(user) {
            return getResult(user);
        })
    })
}

// 이 함수는 push 명령어로 입력받은 데이터를 DB 변수에 집어넣고 입력되었다고 메세지 출력함
function saveDB(user, callback) {
    // push - 데이터 넣는 구문
    DB.push(user);
    console.log(`save${user.name} to DB`)
    return callback(user);
}

// 이 함수는 이메일로 보내졌다고 메세지 출력해 줍니다.
function sendEmail(user, callback){
    console.log(`email to ${user.email}`);
    return callback(user);
}

// 이 함수는 마지막에 배치되었다. 따라서 callback 구문이 없다.
// 이 함수의 결과를 참조할 다음 함수가 없으니까.
function getResult(user){
    return console.log(`succes register ${user.name}`);
}
    const result = register({email: "gmlrhs2@gmail.com", password: "1230", name: "kkgon"})
    console.log(result)
