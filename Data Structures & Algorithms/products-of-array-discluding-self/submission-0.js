class Solution {
    productExceptSelf(nums) {
    function prefixProduct(arr) {
      const prefix = new Array(nums.length);
      if (arr.length === 0) return [];

      prefix[0] = arr[0];

      for (let i = 1; i < arr.length; i++) {
        prefix[i] = prefix[i - 1] * arr[i];
      }

      return prefix;
    }

    function suffixProduct(arr) {
      const n = arr.length;
      if (n === 0) return [];

      const suffix = new Array(n);
      suffix[n - 1] = arr[n - 1];

      for (let i = n - 2; i >= 0; i--) {
        suffix[i] = arr[i] * suffix[i + 1];
      }

      return suffix;
    }

    const prefix = prefixProduct(nums);
    const suffix = suffixProduct(nums);

    let result = [];
    const n = nums.length;

    for (let i = 0; i < n; i++) {
      let left = i === 0 ? 1 : prefix[i - 1];
      let right = i === n - 1 ? 1 : suffix[i + 1];

      result.push(left * right);
    }

    return result;
  }
}
