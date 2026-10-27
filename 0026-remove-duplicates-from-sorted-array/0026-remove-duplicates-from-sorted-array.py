class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        k = 0
        l = 0
        
        for r, num in enumerate(nums):
            if nums[l] == nums[r]:
                continue
            
            l += 1
            nums[l], nums[r] = nums[r], nums[l]
            k += 1

        return k + 1

        