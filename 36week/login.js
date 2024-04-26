function solution(id_pw, db) {
  for (let i of db) {
    if (id_pw[0] === i[0]) {
      if (id_pw[1] === i[1]) {
        return "login";
      }
      return "wrong pw";
    }
  }

  return "fail";
}
