// 24번 문제 서울에서 김서방 찾기

// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, 
// "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. 
// seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.
// 입출력 예
// seoul	return
// ["Jane", "Kim"]	"김서방은 1에 있다"


function solution(seoul) {
    let answer = 0;
    answer = seoul.indexOf("Kim");
    return "김서방은 " + answer + "에 있습니다."
}
// console.log(solution(["형근",  "Kim", "도른"]));


function solution(seoul) {
    let answer = 0;
    seoul.find(function seoulKim(value) {
        for(let i = 0; value !== "Kim"; i++){
            answer += 1;
        }
    })
    return console.log(`김서방은 ${answer}에 있다`);
}
solution(["형근",  "Kim", "도른"]);


// 이 코드 짜다가 포기하고 인터넷 뒤진거 실화냐?

function findKim(seoul){
    var idx = 0;
          for (var i = 0; i < seoul.length; i++){
         if (seoul[i] === 'Kim'){
           idx += i;
           break;
        }
        }
  
    return "김서방은 " + idx + "에 있다";
  }
  
  // 실행을 위한 테스트코드입니다.
  console.log( findKim(["Queen", "Tod", "Kim"]));