class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        top, bottom = 0, len(matrix)-1
        n = len(matrix[0])-1

        while top <= bottom:
            mid = (top + bottom)//2

            if(target >= matrix[mid][0] and target <= matrix[mid][-1] ):
                li ,ri = 0, len(matrix[mid])-1

                while li <= ri:
                    midi = (li + ri)//2
                    if(target == matrix[mid][midi]):
                        return True
                    elif(target > matrix[mid][midi]):
                        li = midi + 1
                    elif(target < matrix[mid][midi]): 
                        ri = midi - 1
                break

            elif(target > matrix[mid][-1]):
                top = mid + 1
            elif(target < matrix[mid][0]):
                bottom = mid - 1

        return False