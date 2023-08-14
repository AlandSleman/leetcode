function romanToInt(s: string): number {
  const romanToIntMap: { [key: string]: number } = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && romanToIntMap[s.substring(i, i + 2)]) {
      result += romanToIntMap[s.substring(i, i + 2)];
      i++; // Move to the next character
    } else {
      result += romanToIntMap[s[i]];
    }
  }

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
