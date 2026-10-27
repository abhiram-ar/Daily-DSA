class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        l = 0
        
        for r, num in enumerate(nums):
            if nums[l] == nums[r]:
                continue
            
            l += 1
            nums[l], nums[r] = nums[r], nums[l]

        return l + 1  # count will be 1 more than the 0-index position

        