class Solution:
    def majorityElement(self, nums: list[int]) -> int:
        freq = {}
        
        for n in nums:
            freq[n] = freq.get(n, 0) + 1
        
        largest = 0
        largestFreq = float("-inf")

        print(freq)

        for k,v in freq.items():
            if v >= largestFreq:
                largest = k
                largestFreq = v

        return largest
        