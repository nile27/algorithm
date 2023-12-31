# 비밀 이메일\_2999

## 문제 설명

[문제 링크](https://www.acmicpc.net/problem/2999)

- Input:
  알파벳 소문자로만 이루어진 입력에서 총 글자 수의 약수들을 통해 2차원 배열을 만들어 행과 열을 바꾸어준 뒤 출력을 해준다.
  (단, 약수는 R(행)<=C(열), 약수가 여러가지일 경우 R이 가장 수를 사용한다.)

```
- bok
- koaski
- boudonuimilcbsai
```

- Output:

```
- bok
- kakosi
- bombonisuuladici
```

- 예시)
  Input = "bombonisuuladici", 길이 16
  약수 = 1x16, 2x8, 4x4

|  b  |  o  |  m  |  b  |
| :-: | :-: | :-: | :-: |
|  o  |  n  |  i  |  s  |
|  u  |  u  |  l  |  a  |
|  d  |  i  |  c  |  i  |

=>bombonisuuladici

## 풀이

- 제곱근 메소드를 사용하여 input값의 길이의 약수들을 구하여 R과 C를 구해준다.
  (제곱근보다 큰 약수들은 이미 작은 수를 구할 때 같이 나오는 원리를 사용한다.)

- R, C값을 통해 2차원 배열을 만들어준다.
- 기존의 값의 행과 열을 바꾸어주어야 하기 때문에 행과 열을 바꿔서 2차원 배열에 대입해준다.
  (행x열 => 열x행)
- 각각의 원소는 행을 기준으로 열의 길이만큼의 배로 커지는 원리를 사용한다.
  예시)

|    1     |    2     |    3     |
| :------: | :------: | :------: |
| 4(1x1+3) | 5(1x2+3) | 6(1x3+3) |
| 7(2x1+3) | 8(2x2+3) | 9(3x2+3) |

```js
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

const Sqrt = () => {
  let [R, C] = [1, 0];
  for (let i = 1; i < parseInt(Math.sqrt(input.length)) + 0.1; i++) {
    if (input.length % i === 0) {
      R = i;
      C = input.length / i;
    }
  }
  return { R, C };
};
let arr = Array.from({ length: Sqrt().R }, (_, i) =>
  Array.from({ length: Sqrt().C }, (_, idx) => input[i + idx * Sqrt().R])
);
console.log(arr.flat().join(""));
```

# 이름 궁합\_15312

## 문제 설명

[문제 링크](https://www.acmicpc.net/problem/15312)
2개의 문자열을 받고 각 문자를 교차한 후 획 수 별로 계속해서 더하여 마지막 두자리 수를 출력하시오.

알파벳 획수: `3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1`
![](https://velog.velcdn.com/images/nile27/post/e83e6337-bd0d-47cf-a204-b0e44276e796/image.png)

- Input:

```
CJM
HER
```

- Output:

```
99
```

## 풀이

- 각 2개의 문자열을 먼저 아스키코드로 치환하여 각 힌트로 주어진 획수로 바꾸어주고, 교차하여 배열로 만들어 준다.
- 배열의 맨 앞의 값을 뺀 값과 그 다음의 값을 더해주고 배열에 맨 끝으로 보내주고, 배열의 길이가 2가 될 때까지 만들어 준다.
- 만일 합이 두 자리가 되는 경우 문자열의 1번 째자리로 치환해준다.

```js
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [A, B] = [input[0], input[1]];
const writeArr = [
  3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1,
];
function asciiFunc(str, str1) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(String(writeArr[str[i].charCodeAt(0) - 65]));
    arr.push(String(writeArr[str1[i].charCodeAt(0) - 65]));
  }
  return arr;
}

let ans = asciiFunc(A, B);

while (ans.length > 2) {
  let cnt = ans.length;

  for (let i = 0; i < cnt - 1; i++) {
    ans.push(String(Number(ans.shift()) + Number(ans[0])));
    if (ans[ans.length - 1].length > 1)
      ans[ans.length - 1] = ans[ans.length - 1][1];
  }
  ans.shift(); //마지막 합산 값 빼주기
}

console.log(ans.join(""));
```

# 문서 검색\_1543

## 문제 설명

[문제 링크](https://www.acmicpc.net/problem/1543)
어떤 문서에 검색하려는 키워드가 몇 번 등장하는지 출력하시오. 단, 중복 되어 세는 것은 제외
예시)
문서: abababa, 단어: ababa => 1

- Input:
  첫 줄: 문서, 두번 째 줄: 키워드

```
- ababababa
  aba

- a a a a a
  a a

- aaaaaaa
  aa
```

- Output:

```
- 2

- 2

- 3
```

## 풀이

- 단어의 길이만큼 문서를 짜르고, 짜른 문서가 키워드가 일치하면 키워드의 길이만큼, 일치하지 않으면 한 칸씩 전진하여 문서 전체를 탐색한다.

```js
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input[0];
const word = input[1];
let ans = 0;
let cnt = 1;
for (let i = 0; i < input[0].length; i += cnt) {
  if (arr.slice(i, word.length + i).includes(word)) {
    ans++;
    cnt = word.length;
  } else {
    cnt = 1;
  }
}

console.log(ans);
```

# DNA_1969

## 문제 설명

[문제 링크](https://www.acmicpc.net/problem/1969)
사전:Adenine, Thymine, Guanine, Cytosine
DNA를 이루는 뉴클레오티드는 첫 글자를 따서 표현한다.
(Thymine-Adenine-Adenine-Cytosine-Thymine-Guanine-Cytosine-Cytosine-Guanine-Adenine-Thymine =>`TAACTGCCGAT`)
여러개의 뉴클레오티드들을 받아 각 위치에서 다른 것의 개수들이 총 몇 개 인지 출력한다.

- Input:
  첫 줄: 뉴클레오티드 개수, 뉴클레오티드의 총 길이

```
- 5 8
  TATGATAC
  TAAGCTAC
  AAAGATCC
  TGAGATAC
  TAAGATGT

- 4 10
  ACGTACGTAC
  CCGTACGTAG
  GCGTACGTAT
  TCGTACGTAA
```

- Output:

```
- TAAGATAC
  7

- ACGTACGTAA
  6
```

## 풀이

- input의 2차원 배열을 받아 각 행의 알파벳들을 객체의 키, 알파벳의 수를 객체의 값으로 표현한다.
- 객체의 가장 값이 큰 객체의 키값을 정답을 출력할 배열에 넣어주고 객체의 총 값들의 합과 가장 큰 값을 빼 주어 다른 것들의 개수를 카운트해준다.
- 만일 가장 큰 값이 여러개일 경우, 사전의 순서로 바꾸어서 알파벳을 저장해준다.

```js
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = [input[0].split(" ")[0], input.shift().split(" ")[1]];
const diction = { A: 0, T: 3, G: 2, C: 1 };
let table = {};
let [ans, cnt] = [[], 0];
let j = 0;
const maxFunc = (table) => {
  let [maxStr, maxNum, count] = ["", 0, 0];
  for (let i of table) {
    count += i[1];
    if (maxNum < i[1]) {
      [maxStr, maxNum] = [i[0], i[1]];
    } else if (maxNum === i[1] && diction[i[0]] < diction[maxStr]) {
      maxStr = i[0];
    }
  }

  cnt += count - maxNum;
  return maxStr;
};

while (ans.length < M) {
  for (let i = 0; i < N; i++) {
    if (!table[input[i][j]]) {
      table[input[i][j]] = 1;
    } else table[input[i][j]]++;
  }
  ans.push(maxFunc(Object.entries(table)));
  table = {};
  j += 1;
}
console.log(ans.join(""));
console.log(cnt);
```

# IPv6_3107

## 문제 설명

[문제 링크](https://www.acmicpc.net/problem/3107)

- IPv6주소는 16진수를 4자리씩 끊어서 표현한다. 하지만 16진수는 읽고 쓰기에 불편하여 대부분의 자리에 0이기 때문에 0을 아래와 같은 방법으로 축약한다.
- 축약 전
  `2001:0db8:85a3:0000:0000:8a2e:0370:7334` 1.각 그룹의 앞자리 0의 전체 또는 일부 생략
  `2001:db8:85a3:0:00:8a2e:370:7334`

2. 0으로만 이루어져 있는 경우가 한 개 이상 연속될 경우 (한 번만 사용가능)
   `2001:db8:85a3::8a2e:370:7334`

축약된 IPv6를 축약되기 전으로 출력하시오.

```
- 25:09:1985:aa:091:4846:374:bb
- ::1
```

- Output:

```
- 0025:0009:1985:00aa:0091:4846:0374:00bb
- 0000:0000:0000:0000:0000:0000:0000:0001
```

## 풀이

- 축약된 IPv6가 맨 앞 혹은 길이가 8개 미만인지 확인하여 2번 규칙으로 축약이 되는지 확인한다.
- 만일 2번 방법으로 축약됬을 경우 각 빈 자리가 어디인지 확인해주고, 처음 input값을 받았을 때 `.split(":")`나누었을 때 `:`이 2개 일 경우 빈 배열이 생기기 때문에 빈 배열이 생기는 부분에 "0000"을 채워준다.

- 만일 처음이 빈 배열인 경우에는 빈 문자열이 총 2가지 생겨 IPv6의 길이 8에서 배열의길이-2를 통해서 "0000"를 몇 개 채울지 확인해고, 그 뒤에 빈 문자열을 제외한 나머지 배열 값들을 채워준다.

- 나머지 일 경우에는 위와 같지만 이 경우에는 빈 배열이 하나만 생겨 8-(배열 길이 -1)을 통해 "0000"을 몇 개 채울지 확인하고, 빈 문자열의 인덱스를 확인하여 그 인덱스 자리에 "0000" 배열을 넣어준다.

- 마지막으로 배열들의 각 원소의 길이가 4가 될 때까지 "0"으로 채워준다.

```js
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
let inputArr = input.split(":");

function fillFunc(arr) {
  if (inputArr[0] === "") {
    let cnt = 8 - (arr.length - 2);
    let fillArr = Array.from({ length: cnt }, () => "0000");
    inputArr = [...fillArr, ...arr.slice(2, inputArr.legnth)];
    return;
  } else {
    let cnt = 8 - (arr.length - 1);
    let blank = arr.indexOf("");
    let fillArr = Array.from({ length: cnt }, () => "0000");
    inputArr = [...arr.slice(0, blank), ...fillArr, ...arr.slice(blank + 1)];
  }
}

if (inputArr.length < 8 || inputArr.includes("")) fillFunc(inputArr);

for (let i = 0; i < inputArr.length; i++) {
  while (inputArr[i].length < 4) {
    inputArr[i] = "0" + inputArr[i];
  }
}

console.log(inputArr.join(":"));
```
