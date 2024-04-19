const axios = require("axios");

async function getTop20Movies() {
    const url = "https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json"
try {
    // await로 서버 주소에서 데이터를 받아오는것을 기다림
    const result = await axios.get(url);
    //  웹주소의 결과는 데이터 속성
    const {data} = result;
    // data안의 articleList key가 없거나 그 key안의 값이 존재하지 않는 경우
    if(!data.articleList || data.articleList.size == 0) {
        throw new Error("역시 데이터는 없습니다.")
    }
    // 원하는 결과값인 영화제목과 순위를 map명령어를 통해서 뽑아내서
    // 객체 데이터 재편성
    const movieInfos = articles.map((article, idx) => {
        return { title: article.title, rank: idx +1};
    })
    //  정리된 데이터를 for문을 이용해 출력한다.
    for (let movieInfo of movieInfos) {
        console.log(`[${movieInfo.rank}등] ${movieInfo.title}`)
    }

}
catch (err) {
    throw new Error(err);
}
}


