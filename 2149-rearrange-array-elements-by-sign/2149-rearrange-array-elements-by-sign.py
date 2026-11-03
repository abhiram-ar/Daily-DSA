class Solution:
    def rearrangeArray(self, nums: list[int]) -> list[int]:
        even = []
        odd = []

        for n in nums:
            if n >= 0:
                even.append(n)
            else:
                odd.append(n)

        ans = []
        i = 0

        while(i < len(even)):
            ans.append(even[i])
            ans.append(odd[i])
            i += 1
        

        return ans
        