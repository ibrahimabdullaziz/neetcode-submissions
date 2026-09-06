from typing import List
hash_set = set()

class Solution:
     def hasDuplicate(self, nums: List[int]) -> bool:
        unique_set = set(nums)
        if len(nums) != len(unique_set):
            return True
        return False
