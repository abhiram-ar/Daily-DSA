class Solution:
    def rotate(self, nums: list[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """

        n = len(nums)
        k = k % n 

        if k == 0:
            return 

        temp = nums[:n-k]

        for i in range(n-k, n):
            nums[i - (n-k)] = nums[i]

        for i in range(k, len(nums)):
            nums[i] = temp[i - k]

        