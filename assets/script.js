let step = 0;

function getPalindrome(num) {
  const obj = {
    result: num,
    step
  };
  if(num == reverse(num)){
    return console.log(obj);
  } else {
    num += +reverse(num);
    step++;
    getPalindrome(num);
  }
}

function reverse(num) {
  let str = String(num);
  return str.split("").reverse().join("");
}

getPalindrome(11); // 0
getPalindrome(312); // 1
getPalindrome(96); // 4