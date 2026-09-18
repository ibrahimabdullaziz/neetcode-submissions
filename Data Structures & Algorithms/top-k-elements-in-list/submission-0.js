class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const countMap = new Map();

    const bucket = Array.from({ length: nums.length + 1 }, () => []);

    for (const num of nums) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    for (const [num, count] of countMap.entries()) {
      bucket[count].push(num);
    }

    const result = [];

    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
      if (bucket[i].length > 0) {
        result.push(...bucket[i]);
      }
    }

    return result.slice(0, k);
  }
}

const solver = new Solution();
console.log(solver.topKFrequent([1, 2, 2, 3, 3, 3, 3, 4], 2));

// class Solution {
//   topKFrequent(nums, k) {
//     const countMap = new Map();

//     for (const num of nums) {
//       countMap.set(num, (countMap.get(num) || 0) + 1);
//     }

//     const sorted = Array.from(countMap.entries()).sort((a, b) => b[1] - a[1]);

//     return sorted.slice(0, k).map((item) => item[0]);
//   }
// }

// const solver = new Solution();
// console.log(solver.topKFrequent([1, 2, 2, 3, 3, 3, 3, 4], 2)); // [3, 2]
