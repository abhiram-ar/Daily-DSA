class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        answer = [0] * len(temperatures)

        for index, val in enumerate(temperatures):
            for j in range(index+1, len(temperatures)):
                if temperatures[j] > temperatures[index]:
                    answer[index] = j-index
                    break


        return answer