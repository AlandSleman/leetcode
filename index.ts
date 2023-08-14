function romanToInt(s: string): number {
  let result = 0;
  let arr = s.split("");
  arr.forEach((i: string) => {
    switch (i) {
      case "I":
        result += 1;
        break;
      case "V":
        result += 5;
        break;
      case "X":
        result += 10;
        break;
      case "L":
        result += 50;
        break;
      case "C":
        result += 100;
        break;
      case "D":
        result += 500;
        break;
      case "M":
        result += 1000;
        break;
    }
  });
  return result;
}
console.log(romanToInt("MCMXCIV"));
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
