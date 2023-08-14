function romanToInt(s: string): number {
  let result = 0;
  let arr = s.split("");
  arr.forEach((i, idx) => {
    switch (i) {
      case "I":
        if (arr[idx + 1] === "V") result += 4
        else
        if (arr[idx + 1] === "X") result += 9;
        else result += 1;
        break;
      case "V":
        result += 5;
        break;
      case "X":
        if (arr[idx + 1] === "L") result += 40
        else
        if (arr[idx + 1] === "C") result += 90;
        else result += 10;
        break;
      case "L":
        result += 50;
        break;
      case "C":
        if (arr[idx + 1] === "D") result += 400
        else
        if (arr[idx + 1] === "M") result += 900;
        else result += 100;
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
console.log(romanToInt("MCMXCIV")); // should be 1994
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
