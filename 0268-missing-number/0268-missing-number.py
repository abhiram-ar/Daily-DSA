class Solution:
    def missingNumber(self, nums: list[int]) -> int:
        carry = 0

        for i in range(len(nums)+1):
            carry ^= i

        for n in nums:
            carry ^= n

        return carry
        