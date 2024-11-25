// 27번 문제 핸드폰 번호 가리기

// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 
// 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 
// 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// phone_number는 길이 4 이상, 20이하인 문자열입니다.

// 입출력 예
// phone_number	return
// "01033334444"	"*******4444"
// "027778888"	"*****8888"

// 폰의 길이를 측정하고 
// 길이 앞의 문자는 * 로 변경하고 > 
// ... 으로 합쳐준다.

function solution(phone_number) {
    let result = [];
    let phoneLength = phone_number.length;
    let phoneNumberArray = phone_number.split('');
    // console.log('phoneNumberArray', phoneNumberArray);
    phoneNumberArray.forEach(
        function (num1, index) {
            if (index < (phoneLength - 4)) {
                // console.log('index',index);
                num1 = '*';
                result.push(num1);
                // console.log('적용후 넘1', num1);
            }
            else {
                result.push(num1);
            }
        }
    )
    // console.log(secretPhoneNumber)
    let answer = result.join('');
    // console.log("result.join('')", result.join(''));
    // console.log('result', result);
    return answer;
}
// solution('01088213294');
console.log(solution('01088213294'))