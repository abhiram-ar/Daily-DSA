class Solution:
    def rearrangeArray(self, nums: list[int]) -> list[int]:
        posIdx = 0
        negIdx = 1

        ans = [None] * len(nums)    

        for n in nums:
            if n >= 0:
                ans[posIdx] = n
                posIdx += 2
            else:
                ans[negIdx] = n
                negIdx += 2

        return ans
        