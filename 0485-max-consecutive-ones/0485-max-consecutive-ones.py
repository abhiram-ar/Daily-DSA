class Solution:
    def findMaxConsecutiveOnes(self, nums: list[int]) -> int:
        cnt = 0
        mx = 0

        for n in nums:
            if n == 1:
                cnt+=1
                mx = max(mx, cnt)
            else:
                cnt = 0

        return mx 
        