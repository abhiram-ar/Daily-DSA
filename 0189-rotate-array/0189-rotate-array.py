class Solution:
    def rotate(self, nums: list[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        k = len(nums) - k % len(nums) 
        temp = []

        for i in range(k):
            temp.append(nums[i])
        
        for i in range(k, len(nums)):
            nums[i - k] = nums[i]
    

        for i in range(len(nums) - k, len(nums)):
            nums[i] = temp[i - (len(nums) - k)]

        