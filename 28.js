// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 
// return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.

// 입출력 예
// numbers	          result
// [1,2,3,4,6,7,8,0]	14
// [5,8,4,0,6,7,9]   	 6

// 입출력 예 설명
// 입출력 예 #1
// 5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.

// 입출력 예 #2
// 1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.

// function solution(numbers) {
//     let answer = 0;
//     for(let i = 0; i < 10; i++) {
//         console.log(answer);
//         let numbersResult = numbers.find(x => {
//             // console.log('i값 : ', i);
//             if(x === i) {
//                 return true;        
//             }
//             // console.log(i);
//         })
//         numbersResult ? answer : answer +=i;
//     }
//     return answer;
// }
// console.log(solution([1,2,3,4,6,7,8,0]));


// function solution(numbers) {
//     let answer = 0;
//     for(let i = 0; i < 10; i++) {
//         let numbersResult = numbers.find(x => {
//             if(x === i) {
//                 return true;        
//             }
//         })
//         numbersResult ? answer : answer += i;
//     }
//     return answer;
// }
// console.log(solution([5,8,4,0,6,7,9]));



// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 
// return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    let answer = 0;
    let num = [];
    makeNum(num);
    checkNum(num, numbers);
    answer = calcNum(num, answer);
    return answer;
  }
  function calcNum(num, answer) {
    let ans = answer;
    num.forEach(el => {
      el[1] == 0 ? ans+=el[0] : ans
    });
    return ans;
  }
  function checkNum(num, numbers) {
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < num.length; j++) {
        if (num[j][0] == numbers[i]) {
          num[j][1] += 1;
          break;
        } else continue;
      }
    }
  }
  function makeNum(num) {
    for (let i = 0; i < 10; i++) {
      num.push([i,0]);
    }
  }
  
  console.log(solution([5,8,4,0,6,7,9]));