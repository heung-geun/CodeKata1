// 46번 문제 숫자 문자열과 영단어

// 네오와 프로도가 숫자놀이를 하고 있습니다.
// 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를
// 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// 1478 → "one4seveneight"
// 234567 → "23four5six7"
// 10203 → "1zerotwozero3"
// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나,
// 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다.
// s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

// 입출력 예
// s	result
// "one4seveneight"	1478
// "23four5six7"	234567
// "2three45sixseven"	234567
// "123"	123
// 입출력 예 설명
// 입출력 예 #1

// 문제 예시와 같습니다.
// 입출력 예 #2

// 문제 예시와 같습니다.
// 입출력 예 #3

// "three"는 3, "six"는 6, "seven"은 7에 대응되기 때문에 정답은 입출력 예 #2와 같은 234567이 됩니다.
// 입출력 예 #2와 #3과 같이 같은 정답을 가리키는 문자열이 여러 가지가 나올 수 있습니다.
// 입출력 예 #4

// s에는 영단어로 바뀐 부분이 없습니다.
// 제한시간 안내
// 정확성 테스트 : 10초

function solution(s) {
  const number = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];
  const answer = number.reduce((str, word, index) => {
    const regex = new RegExp(word, "g");
    return str.replace(regex, index);
  }, s);
  return +answer;
}

console.log(solution("one4seveneight"));
console.log(solution("23four5six7"));
console.log(solution("2three45sixseven"));
console.log(solution("1234"));

// 정규 표현식을
// const array = ["사과", "바나나", "체리"];
// const inputString =
//   "나는 사과와 바나나를 좋아해. 바나나가 제일 맛있어 체리는 싫어!";
// const updatedString = array.reduce((str, word) => {
//   const regex = new RegExp(word, "g"); // 단어를 찾기 위한 정규표현식
//   return str.replace(regex, `${word} (변경됨)`); // 단어를 변경
// }, inputString);

// console.log(updatedString);

// function solution(s) {
//   let numbers = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine"
//   ];
//   var answer = s;

//   for (let i = 0; i < numbers.length; i++) {
//     let arr = answer.split(numbers[i]);
//     answer = arr.join(i);
//   }

//   return Number(answer);
// }
// console.log(updatedString);
