// 프로그래머스 전화번호 목록
function solution(arr) {
  let answer = true;
  let phone_book = [...arr].sort()
  let first = "";
 
  for(let i = 0 ; i < phone_book.length-1; i++){
      if(phone_book[i] === phone_book[i+1].slice(0, phone_book[i].length))  return false
  }
  
  return answer;
}