class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        elem = None
        count = 0

        for n in nums:
            if count == 0:
                elem = n
            
            if elem == n:
                count += 1
            else:
                count -= 1

        return elem