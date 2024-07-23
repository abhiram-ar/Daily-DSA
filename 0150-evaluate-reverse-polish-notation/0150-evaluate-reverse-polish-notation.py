class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for i in tokens:
            if i=="+":
                stack.append(stack.pop() + stack.pop())
            elif (i=="*"):
                stack.append(stack.pop() * stack.pop())
            elif(i == "-"):
                a , b = stack.pop(), stack.pop()
                stack.append(b-a)
            elif (i == "/"):
                a , b = stack.pop(), stack.pop()
                # to truncate towards zero we wrap it inside a int()
                # if we use // operatior it would do the floor opeation
                stack.append(int(b/a))
            
            else:
                stack.append(int(i))


        return stack[0]
