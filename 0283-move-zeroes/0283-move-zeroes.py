class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        ins = 0
        for i, n in enumerate(nums):
            if n!= 0:
                nums[i] = 0
                nums[ins] = n
                ins += 1 
        