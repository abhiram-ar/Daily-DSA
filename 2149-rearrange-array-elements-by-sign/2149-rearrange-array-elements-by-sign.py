class Solution:
    def rearrangeArray(self, nums: list[int]) -> list[int]:
        positive = []
        negative = []

        for n in nums:
            if n >= 0:
                positive.append(n)
            else:
                negative.append(n)

        for i in range(len(nums)//2):
            nums[i*2] = positive[i]
            nums[(i*2)+1] = negative[i]


        return nums
        