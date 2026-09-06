from collections import Counter

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sCounts = Counter(s)
        tCounts = Counter(t)
        if(tCounts == sCounts) :
            return True
        return False

print(Solution().isAnagram("h", "h"))
        



# class Solution:
#     def isAnagram(self, s: str, t: str) -> bool:
#         if(len(s)!=len(t)):
#             return False
#         countS = {}
#         countT = {}

#         for i in range(len(s)):
#             countS[s[i] ]= 1+ countS.get(s[i],0)
#             countT[s[i] ] = 1+ countT.get(s[i],0)

#         return countS == countT

# print(Solution().isAnagram("h", "h"))