function isPalindrome(x: number): boolean {
  let string = x.toString();
  let arr = string.split("");
  let string0 = "";
  let string1 = "";
  arr.forEach((s) => (string0 += s));
  arr.reverse().forEach((s) => (string1 += s));
  if (string0 === string1) return true;
  else return false;
}
console.log(isPalindrome(121));
