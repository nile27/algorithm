function prime(num) {
  if (num === 1 || num === 0) return false;
  let sqrt = Math.sqrt(num);

  for (let i = 2; i < parseInt(sqrt) + 1; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution(numbers) {
  let ans = new Set();
  let arr = numbers.split("");
  let visit = Array.from({ length: arr.length }, () => false);

  function findSort(start, arr, card) {
    if (start === arr.length) return;
    let cardParts = "";

    for (let i = 0; i < arr.length; i++) {
      if (!visit[i]) {
        cardParts += arr[i];
        prime(Number(card + cardParts))
          ? ans.add(Number(card + cardParts))
          : null;
        visit[i] = true;

        findSort(start + 1, arr, card + cardParts);

        visit[i] = false;
        cardParts = "";
      }
    }
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    arr.push(arr.shift());
    findSort(0, arr, "");
  }

  return ans.size;
}
