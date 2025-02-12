// 55번 문제  카드 뭉치

// 코니는 영어 단어가 적힌 카드 뭉치 두 개를 선물로 받았습니다.
// 코니는 다음과 같은 규칙으로 카드에 적힌 단어들을 사용해 원하는 순서의 단어 배열을 만들 수 있는지 알고 싶습니다.

// 원하는 카드 뭉치에서 카드를 순서대로 한 장씩 사용합니다.
// 한 번 사용한 카드는 다시 사용할 수 없습니다.
// 카드를 사용하지 않고 다음 카드로 넘어갈 수 없습니다.
// 기존에 주어진 카드 뭉치의 단어 순서는 바꿀 수 없습니다.

function solution(cards1, cards2, goal) {
  let answer = "Yes";
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < goal.length) {
    if (goal[i] === cards1[j]) {
      i++;
      j++;
    } else if (goal[i] === cards2[k]) {
      i++;
      k++;
    } else {
      return (answer = "No");
    }
  }
  return answer;
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);

console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);

// 비슷하지만 조금더 간결한 답변

// function solution(cards1, cards2, goal) {
//     let j = 0;
//     let k = 0;
//     for(let i=0;i<goal.length;i++){
//         if(goal[i] == cards1[j]) j++;
//         else if(goal[i] == cards2[k]) k++;
//         else return "No"
//     }
//     return "Yes";
// }
