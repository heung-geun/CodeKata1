// 30 번 문제 가운데 글자 가져오기
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
// 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

// 입출력 예
// s	    return
// "abcde"	"c"
// "qwer"	"we"


function solution(s) {
    let answer = '';
    if(s.length % 2 === 0) {
        answer = s.slice(((s.length / 2) - 1), ((s.length / 2) + +1));
    } else {
        answer = s.slice((s.length - 1) / 2, ((s.length - 1) / 2) + 1);
    }
    return String(answer);
}

console.log(solution("abcde")); // "c"
console.log();
console.log(solution("qwer"));

// let str3 = "123456789012";

// slice > 시작 위치, 시작위치에서 끝나는 지점
// console.log(str3.slice(7, 11)); // 8901


// 한줄 답안

// function solution(s) {
//     return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
// }