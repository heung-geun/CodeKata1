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
  let ternaryN = 1;
  let i = 1;
  while (true) {
    let x = 3 * i;
    if (n - x * 3 < x) {
      ternaryN = i;
      break;
    }
    i++;
  }

  let j = i;
  let result = n;
  let minusRes = 0;
  let a = "";

  // a에 값에 1, 2, 3 중에 하나 넣을거임
  while (j > 0) {
    result = result - minusRes;
    for (let i = 3 - 1; i > 0; i--) {
      console.log("forA= ", a);
      let x = Math.pow(3, j);
      console.log("x=", x);
      if (result === 0) {
        a += 0;
      } else if (result - x * i <= 0) {
        a += i;
        minusRes = result - x * (i - 1);
      }
    }
    j--;
  }
  console.log("a= ", a);

  // let reversal = ternary.reverse();
  return answer;
}

console.log(solution(45));
