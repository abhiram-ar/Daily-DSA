class Solution:
    def search(self, nums: List[int], target: int) -> int:
        index = -1
        for j in range(len(nums)):
            if nums[j] == target:
                index = j
                break


        return index
        