// 36번 문제 문자열 다루기 기본

// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수,
// solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

// 입출력 예
//    s   	return
// "a234"	   false
// "1234"	   true

// 아래와 같이 생각해서 푸는 방법은 0x11 과 같은
// 16진법을 nan으로 반환하지 않기 때문에 아래 코드 사용 불가능

// function solution(s) {
//   let sType = Number(s);
//   console.log(s.length);
//   if (isNaN(sType) === true) {
//     return false;
//   } else if (s.length === 4 || s.length === 6) {
//     return true;
//   } else {
//     return false;
//   }
// }
// // 오답 나오는 문자열
// console.log(solution("0x16")); // 16진수의 헥사데시멀 표기법
// console.log(solution("11e3")); // 지수함수

function solution(s) {
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }
  const numTest = /^[0-9]+$/;
  return numTest.test(s);
}

console.log(solution("0x11"));
console.log(solution("11e3"));
console.log(solution("0001"));
