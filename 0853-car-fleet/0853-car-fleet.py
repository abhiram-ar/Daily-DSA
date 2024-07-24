class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        pair = [[p, s] for p, s in zip(position, speed)] #we pair up for efficient computation
        
        stack = [] # the length of stack will be unique fleets 

        for p, s in sorted(pair)[::-1]: #sort and start computation from car closest from the target
            stack.append((target - p) / s) #append the time remaining
            if len(stack) >= 2 and stack[-1] <= stack[-2]:
                stack.pop()
            
        return len(stack)