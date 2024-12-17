// 40번 문제 3진법 뒤집기

// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후,
// 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// n은 1 이상 100,000,000 이하인 자연수입니다.

// 입출력 예
// n	result
// 45	7
// 125	229

// 입출력 예 설명

// 입출력 예 #1

// 답을 도출하는 과정은 다음과 같습니다.
// n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
// 45	1200	0021	7
// 따라서 7을 return 해야 합니다.

// 입출력 예 #2

// 답을 도출하는 과정은 다음과 같습니다.
// n (10진법)	n (3진법)	앞뒤 반전(3진법)	10진법으로 표현
// 125	       11122	     22111	            229
// 따라서 229를 return 해야 합니다.

function solution(n) {
  let answer = 0;
  let ternary = "";

  // n이 0일 경우, 3진법으로 변환한 결과는 '0'입니다.
  if (n === 0) return "0";

  while (n > 0) {
    // n을 3으로 나눈 나머지를 구하고, 이를 answer의 앞에 추가합니다.
    ternary = (n % 3).toString() + ternary;
    // n을 3으로 나누어 다음 반복을 위해 값을 업데이트합니다.
    n = Math.floor(n / 3);
  }
  let ternaryArr = ternary.split("");
  console.log(ternaryArr);
  for (let i = 0; i < ternaryArr.length; i++) {
    console.log("ternaryArr[i]", ternaryArr[i]);
    let result = parseInt(ternaryArr[i], 10); // 각 자리의 숫자를 가져옵니다.
    console.log(result * Math.pow(3, i));
    answer += result * Math.pow(3, i);
  }

  return answer;
}

console.log(solution(45));
