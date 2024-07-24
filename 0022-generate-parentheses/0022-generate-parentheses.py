class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        # only add open parenthesis if Nopen < n
        # only add close parenthesis if Nclose < Nopen
        # valid if Nopen = Nclose = n
        
        stack = [] #global stack and res
        res = []

        def backtrack(Nopen, Nclose,):
            if(Nclose == Nopen == n):
                res.append("".join(stack))
                return

            if(Nopen < n):
                stack.append("(")
                backtrack(Nopen+1, Nclose)
                stack.pop()
            if(Nclose < Nopen):
                stack.append(")")
                backtrack(Nopen, Nclose+1)
                stack.pop()
        
        backtrack(0,0)
        return res
        