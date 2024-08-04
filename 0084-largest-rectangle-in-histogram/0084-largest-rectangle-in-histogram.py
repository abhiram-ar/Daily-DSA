class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        n = len(heights)
        if n==1:
            return heights[0]
        max_area = 0
        for i, h in enumerate(heights):
            nse = i #next smallest element
            while nse < n and heights[nse] >= h:
                nse += 1

            pse = i #previous smallest element
            while pse >= 0 and heights[pse] >= h:
                pse -= 1

            #dont include the j the element
            max_area = max(max_area, h*((nse-1) - pse))

        return max_area 
        