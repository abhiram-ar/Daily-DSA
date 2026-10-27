class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        l = 0
        for r, n in enumerate(nums):
            if n!= 0:
                nums[l], nums[r] = nums[r], nums[l]
                l += 1 
        