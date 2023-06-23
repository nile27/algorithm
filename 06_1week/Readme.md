# 알파벳 개수 백준\_10808

## 문제 설명

[문제 링크](https://www.acmicpc.net/problem/10808)
알파벳 소문자로 이루어진 문자열에 알파벳 개수를 출력

- Input:

```
baekjoon
```

- Output:

```
1 1 0 0 1 0 0 0 0 1 1 0 0 1 2 0 0 0 0 0 0 0 0 0 0 0
```

## 풀이

- 알파벳의 갯수 만큼 0으로 채워진 배열을 생성 후 index 기준으로 알파벳이 해당된 곳에 1씩 올려준다.

- 아스키 코드를 사용하여 index를 지정해준다.
  (ex: a(97) - 97 = 0 , answer의 0번째의 수가 올라간다.)

```js
const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();

const answer = Array.from({ length: 26 }, (v, i) => 0);

for (let i of input) {
  answer[i.charCodeAt(0) - 97]++;
}

console.log(answer.join(" ").trim());
```

# 방 번호 백준\_1475

## 문제 설명

[문제 링크](https://www.acmicpc.net/problem/1475)
0~9까지의 한 카드 세트로 방 번호를 만들 때, 최소한 필요한 세트의 개수를 출력 (6은 9를 뒤집어서 사용가능)

- Input:

```
9999
```

- Output:

```
2
```

## 풀이

- j: 0~9 까지의 카드, keyArr: 0~9 까지의 카드 갯수, answer: 정답
- while문을 통해 0~9까지의 카드를 올려주고, for문을 통해 input 배열을 전부를 확인하여, 각 숫자의 카드가 몇 개씩 있는지 keyArr의 배열에 개수를 넣어준다.
- 반복문이 끝나고 6,9는 한 개로 취급하기 때문에 6,9의 갯수를 합쳐서 2로 나누고, 올림한다.

```js
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim();

let [j, answer] = [0, 0];
let keyArr = Array.from({ length: 10 }, (v) => 0);

while (j <= 9) {
  for (let i of input) {
    if (Number(i) === j) keyArr[j]++;
  }
  j++;
}

[keyArr[6], keyArr[9]] = [Math.ceil((keyArr[6] + keyArr[9]) / 2), 0];

answer = Math.max(...keyArr);

console.log(answer);
```

# 요세푸스 문제 백준\_1158

## 문제 설명

[문제 링크](https://www.acmicpc.net/problem/1158)
[요세푸스 문제란?](https://namu.wiki/w/%EC%9A%94%EC%84%B8%ED%91%B8%EC%8A%A4%20%EB%AC%B8%EC%A0%9C)
1부터 N개의 숫자를 에서 K번 째 만큼 제거한다. 여기서 출력은 제거 된 수의 순서이다.

- Input:
  N: 첫 번째, K: 두 번째

```
7,3
```

- Output:

```
<3, 6, 2, 7, 5, 1, 4>
```

## 풀이

- j: 1~N까지의 수, cnt: 1~K, arr: 1~N까지 수를 만들어 제거할 테이블, answer: 정답
- 1~N까지 제거해야 될 테이블을 만든다.
- 반복문을 통해 answer가 arr테이블과 길이가 같아지면 arr를 전부 확인한 후가 되기 때문에 조건을 걸어준다.
- j가 N과 같아지는 것 즉, 배열 보다 밖을 카운터를 시도할 때, 0으로 초기화 시켜 처음으로 돌리고, 제거 된 상태의 수를 셀 때는 cnt에 적용이 되면 안된다.
- 위의 조건이 참이고, cnt의 값이 입력 값 K와 같으면 answer배열에 추가하고, cnt값은 다시 0으로 초기화 시킨다.

```js
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split(" ");
const N = Number(input[0]);
let K = Number(input[1]);
let j = 0;
let cnt = 0;
let answer = [];
let arr = Array.from({ length: N }, (v, i) => i + 1);

while (answer.length !== N) {
  if (j === N) {
    j = 0;
  }
  if (arr[j] !== 0) cnt++;
  if (cnt === K) {
    answer.push(arr[j]);
    arr[j] = 0;
    cnt = 0;
  }

  j++;
}

console.log("<" + answer.join(", ") + ">");
```

# 개수 세기 백준\_10807

## 문제 설명

[문제 링크](https://www.acmicpc.net/problem/10807)
숫자로 이루어진 배열(2번째 줄) 안에서 원하는 숫자(3번째 줄)의 갯수를 확인하라

- Input:

```
11
1 4 1 2 4 2 4 2 3 4 4
2
```

- Output:

```
3
```

## 풀이

- arr: input의 숫자 배열

- arr의 숫자들을 확인해면서 원하는 숫자(input[2])가 몇 개인지 확인한다.

```js
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");
let arr = input[1].split(" ");
let answer = 0;

for (let i of arr) {
  if (Number(input[2]) === Number(i)) answer++;
}

console.log(answer);
```

# 방 배정 백준\_13300

## 문제 설명

[문제 링크](https://www.acmicpc.net/problem/13300)

- 어느 초등학교의 학년,성별로 구분하여 최소 몇 개의 방을 지정해야 되는지 출력
- 0: 여성 ,1: 남성

- Input:
  첫째 줄: 총 인원, 방 최대 인원
  나머지 줄: 성별, 학년

```
16 2
1 1
0 1
1 1
0 2
1 2
0 2
0 3
1 3
1 4
1 3
1 3
0 6
1 5
0 5
1 5
1 6
```

- Output:

```
12
```

## 풀이

- memberArr: 성별, 학년으로 이루어진 총 학생의 배열, maxMember: 방 최대 인원, room: 방 갯수, roomObj: 성별, 학년별 한 방에 몇 명인지 확인하는 객체 테이블

- 첫 번째 반복문을 통해 memberArr를 확인하면서, 학년과 성별 기준으로, roomObj의 해당되는 수를 올려준다.
- 만일 방의 인원이 꽉 찾을 경우 해당 roomObj의 요소를 초기화 해주고, room의 개수를 증가시켜준다.
- 두 번째 반복문을 통해 0이 아닌 모든 요소들은 방이 필요한 경우임으로 room의 개수를 증가시켜준다.

```js
const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().trim().split("\n");

let memberArr = input.slice(1, input.length);
let maxMember = Number(input[0].split(" ")[1]);
let room = 0;
let roomObj = {
  1: {
    0: 0,
    1: 0,
  },
  2: {
    0: 0,
    1: 0,
  },
  3: {
    0: 0,
    1: 0,
  },
  4: {
    0: 0,
    1: 0,
  },
  5: {
    0: 0,
    1: 0,
  },
  6: {
    0: 0,
    1: 0,
  },
};

for (let i of memberArr) {
  roomObj[i[2]][i[0]]++;

  if (roomObj[i[2]][i[0]] === maxMember) {
    roomObj[i[2]][i[0]] = 0;
    room++;
  }
}

for (let i of Object.keys(roomObj)) {
  if (roomObj[i][1] !== 0) room++;
  if (roomObj[i][0] !== 0) room++;
}

console.log(room);
```
