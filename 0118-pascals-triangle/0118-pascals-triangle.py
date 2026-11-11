class Solution:
    def generate(self, numRows: int) -> list[list[int]]:
        res = []
        
        for i in range(numRows):
            res.append([])

        res[0].append(1)

        for i in range(1,numRows):
            for j in range(i+1):
                
                top1 = res[i-1][j-1] if j > 0 else 0 
                top2 = res[i-1][j] if j < i else 0
                sum = top1 + top2

                res[i].append(sum)

        return res
        
        
        