function getPalindrome(num, step = 0) {
  const reverseNumber = reverse(num);

  if(num === reverseNumber){
    return {
      result: num,
      step
    };
  } else {
    num += reverseNumber;
    return getPalindrome(num, ++step);
  }
}

function reverse(num) {
  let str = String(num);
  return +str.split("").reverse().join("");
}

getPalindrome(11); // 0
getPalindrome(312); // 1
console.log(getPalindrome(89)); // 4