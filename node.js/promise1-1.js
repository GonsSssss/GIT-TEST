const DB = []

function register_promise(user) {
    const result1 = saveDB(user).then(sendEmail).then(getResult);
    return result1
}

// 아까 콜백처럼 후속함수를 시작으로 안받으니까 callback 단어가 빠짐
function saveDb(user) {
    // 데이터를 받기 전 현재까지의 데이터 크기를 oldDBSize에 저장
    const oldDBSize = DB.length;
    // 입력받는 데이터를 psuh명령어로 DB에 저장
    DB.push(user);
    console.log(`save ${user.name} to DB`)
    // (resolve, reject) 즉 성공과 실패를 시작으로 하는 함수를 만들어서
    //  new promise라는 새로운 객체 안에 둔다. (함수의 이행과 실패사례)
    return new Promise((resolve, reject) => {
        // 새로운 데이터를 입력받은 지금 데이터베이스가
        // 아까 정의된 기존 데이터베이스보다 크다.
        if (DB.length > oldDBSize) {
            resolve(user);
        }
        // 데이터가 못들어와서 if 조건 불만족시 실패 메세지 출력
        else {
            reject(new Error("DB error)"))
        }
    })
}

function sendEmail(user) {
    console.log(`email to ${user.email}`)
    // 여기에는 굳이 실패조건을 따로 만들진 않았다. 데이터 못받으면 어차피 실패니까
    return new Promise((resolve) => {
        resolve(user)
    })
}

function getResult(user) {
    return Promise((resolve, reject) =>{
        resolve(`succes register ${user.name}`)
    })
}
const myUser = register({email: "gmlrhs2@gmail.com", password: "1020", name: "HG"})

const result = register_promise(myUser)
result.then(console.log);
