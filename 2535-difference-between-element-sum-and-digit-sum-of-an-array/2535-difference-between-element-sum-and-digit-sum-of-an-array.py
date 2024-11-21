class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:
        digitSum = 0
        for num in nums:
            numberStr = list(str(num))
            for char in numberStr:
                digitSum += int(char)

        return abs(sum(nums) - digitSum)
        