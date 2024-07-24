class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        for i in range(len(position)):
            position[i] = 12-position[i]

        time = []
        for i in range(len(position)):
            time.append(position[i]/speed[i])
        print(position)
        print(time)

        ans = len(position)
        visited = []
        for i in range(len(position)):
            fleet = 0
            if i in visited:
                continue
            for j in range(len(position)):
                if i==j:
                    fleet += 1
                    continue
                if position[j] >= position[i] and time[j] <= time[i] and j not in visited:
                    fleet += 1
                    visited.append(j)
            ans = ans - fleet + 1
        return ans