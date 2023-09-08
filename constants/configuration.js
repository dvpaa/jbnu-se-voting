import { monthMapper } from "./mapper";


const CONFIGS = {
    YEAR: "2023",
    VOTE_COUNTER: "김재현(개표위원장)",
    MAIN_CANDIDATE: "21학번 전정현",
    SUB_CANDIDATE: "19학번 김건우",
    POSTER_URL: "/images/candidate_poster.png",
    USER_NUMBERS: 33,
    
    // 선거 종료 일시 설정
    // 입력 표준은 KST
    END_YEAR: 2023,
    END_MONTH: monthMapper.SEP, // month base = 0
    END_DATE: 9,
    END_HOUR: 13,
    END_MINUTE: 0,
};

module.exports = {
    configs: CONFIGS,
}