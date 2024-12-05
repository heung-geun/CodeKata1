// 34번 문제 문자열 내림차순으로 배치하기

// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해
// 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.

// 입출력 예
// s	        return
// "Zbcdefg"	"gfedcbZ"


// 뻘짓... 순서대로 정렬하는데 대소문자만 바꾸는 건줄 알았음...
// function solution(s) {
//   let answer = '';
//   let arrStr = s.split('').sort();

//   answer += arrStr.filter((lowerCase) => {
//     console.log(lowerCase.toLowerCase())
//     return lowerCase === lowerCase.toLowerCase()
//   }).join('');

//   answer += arrStr.filter((upperCase) => {
//     return upperCase === upperCase.toUpperCase()
//   }).join('');
//   // console.log(arrStr)
//   return answer;
// }

// console.log(solution("ZbdHcefg")); // bcdefgHZ

function solution(s) {
  let answer = '';
  let arrStr = s.split('').sort();
  let reversStr = arrStr.reverse()
  reversStr.forEach(str => answer += str);
  return answer;
}

console.log(solution("ZbdHcefg"));


// 소름돋는 답변...
// function solution(s) {
//   return s
//     .split("")
//     .sort()
//     .reverse()
//     .join("");
// }