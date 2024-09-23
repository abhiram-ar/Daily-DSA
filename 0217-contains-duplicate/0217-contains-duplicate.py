class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        hashset = set()
        for i in range(len(nums)):
            if nums[i] in hashset:
                return True
            else:
                hashset.add(nums[i])
        return False
        