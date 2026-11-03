class Solution:
    def rearrangeArray(self, nums: list[int]) -> list[int]:
        positive = []
        negative = []

        for n in nums:
            if n >= 0:
                positive.append(n)
            else:
                negative.append(n)

        ans = []
        i = 0

        while(i < len(positive)):
            ans.append(positive[i])
            ans.append(negative[i])
            i += 1
        

        return ans
        