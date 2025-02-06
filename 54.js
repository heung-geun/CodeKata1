// 문제 2016년

// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수,
// solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
// 입출력 예
// a	b	result
// 5	24	"TUE"

function solution(a, b) {
  var answer = "";
  let weekArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let lastDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  switch (a) {
    case 1:
      let JanFirstDay = 5;
      let JanDay = JanFirstDay + b - 1;
      if (b === 1) {
        answer = weekArr[JanFirstDay];
      } else if (JanDay < 7) {
        answer = weekArr[JanDay];
      } else {
        let day = JanDay % 7;
        answer = weekArr[day];
      }
      break;
    case 2:
      let FebfirstDay = 1;
      let FebDay = FebfirstDay + b - 1;
      if (b === 1) {
        answer = weekArr[FebfirstDay];
      } else if (FebDay < 7) {
        answer = weekArr[FebDay];
      } else {
        let day = FebDay % 7;
        answer = weekArr[day];
      }
      break;
    case 3:
      let MarFirstDay = 2;
      let mafDay = MarFirstDay + b - 1;
      if (b === 1) {
        answer = weekArr[MarFirstDay];
      } else if (mafDay < 7) {
        answer = weekArr[mafDay];
      } else {
        let day = mafDay % 7;
        answer = weekArr[day];
      }
      break;
    case 4:
      let AprFirstDay = 5;
      let AprDay = AprFirstDay + b - 1;
      if (b === 1) {
        answer = weekArr[AprFirstDay];
      } else if (AprDay < 7) {
        answer = weekArr[AprDay];
      } else {
        let day = AprDay % 7;
        answer = weekArr[day];
      }
      break;
    case 5:
      let MayFirstDay = 0;
      let MayDay = MayFirstDay + b - 1;
      if (b === 1) {
        answer = weekArr[MayFirstDay];
      } else if (MayDay < 7) {
        answer = weekArr[MayDay];
      } else {
        let day = MayDay % 7;
        answer = weekArr[day];
      }
      break;
    case 6:
      let JunFirstDay = 3;
      let JunDay = JunFirstDay + b - 1;
      if (b === 1) {
        answer = weekArr[JunFirstDay];
      } else if (JunDay < 7) {
        answer = weekArr[JunDay];
      } else {
        let day = JunDay % 7;
        answer = weekArr[day];
      }
      break;
    case 7:
      let JulFirstDay = 5;
      let JulDay = JulFirstDay + b - 1;
      if (b === 1) {
        answer = weekArr[JulFirstDay];
      } else if (JulDay < 7) {
        answer = weekArr[JulDay];
      } else {
        let day = JulDay % 7;
        answer = weekArr[day];
      }
      break;
    case 8:
      let AugFirstDay = 0;
      let AugDay = AugFirstDay + b - 1;
      if (b === 1) {
        answer = weekArr[AugFirstDay];
      } else if (AugDay < 7) {
        answer = weekArr[AugDay];
      } else {
        let day = AugDay % 7;
        answer = weekArr[day];
      }
      break;
    case 9:
      let SepFirstDay = 4;
      let SepDay = SepFirstDay + b - 1;
      if (b === 1) {
        answer = weekArr[SepFirstDay];
      } else if (SepDay < 7) {
        answer = weekArr[SepDay];
      } else {
        let day = SepDay % 7;
        answer = weekArr[day];
      }
      break;
    case 10:
      let OctFirstDay = 6;
      let OctDay = OctFirstDay + b - 1;
      if (b === 1) {
        answer = weekArr[OctFirstDay];
      } else if (OctDay < 7) {
        answer = weekArr[OctDay];
      } else {
        let day = OctDay % 7;
        answer = weekArr[day];
      }
      break;
    case 11:
      let NovFirstDay = 0;
      let NovDay = NovFirstDay + b - 1;
      if (b === 1) {
        answer = weekArr[NovFirstDay];
      } else if (NovDay < 7) {
        answer = weekArr[NovDay];
      } else {
        let day = NovDay % 7;
        answer = weekArr[day];
      }
      break;
    case 12:
      let DecFirstDay = 4;
      let DecDay = DecFirstDay + b - 1;
      if (b === 1) {
        answer = weekArr[DecFirstDay];
      } else if (DecDay < 7) {
        answer = weekArr[DecDay];
      } else {
        let day = DecDay % 7;
        answer = weekArr[day];
      }
      break;
  }
  return answer;
}

console.log(solution(5, 24));
console.log(solution(2, 11));
console.log(solution(9, 22));
console.log(solution(12, 17));

// 좋은답변... (멍청했네... 달은 연결되는데 따로 생각했군..) 리디우스를 쓰자!! 누적 더하기!!
// function getDayName(a,b){
//   var dayList = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
// var monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// var daySum;
// if(a < 2) {
//   daySum = b - 1;
// } else {
//   daySum = monthArr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
// }
//   return dayList[daySum % 7];
// }

// date 메서드도 있구만
// function getDayName(a,b){
//   var tempDate = new Date(2016, a-1, b);

//   return tempDate.toString().slice(0,3).toUpperCase();
// }
