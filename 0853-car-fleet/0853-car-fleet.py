class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        pair = [[p, s] for p, s in zip(position, speed)] #we pair up for efficient computation
        pair.sort(reverse=True) #sort and start computation from car closest from the target in for loop
        stack = [] # the length of stack will be unique fleets 

        for p, s in pair: 
            stack.append((target - p) / s) #append the time remaining
            if len(stack) >= 2 and stack[-1] <= stack[-2]:
                stack.pop()
            
        return len(stack)