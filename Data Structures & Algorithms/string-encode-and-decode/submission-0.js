class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let result = "";
    for (let str of strs) {
      result += str.length + "#" + str;
    }
    return result;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let result = [];
    let i = 0;

    while (i < str.length) {
      let hashIndex = str.indexOf("#", i);
      const length = Number(str.substring(i, hashIndex));
      const word = str.substring(hashIndex + 1, hashIndex + 1 + length);

      result.push(word);

      i = hashIndex + 1 + length;
    }

    return result;
  }
}