class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        # modified version of brute force
        # do bin search on the possible solution then find the time taken by each pile


        l = 1 # 1ban/hr is the min possible value
        r = max(piles) #maximum possible value, above this there is no effect
        res = r # assume max is the value and we will try to find the min value

        # bin search to find appropriate K
        while l <= r:
            k = (l+r)//2
            timeTaken = 0
            
            # time-taken for the current K value
            for pile in piles:
                timeTaken +=  math.ceil(pile/k)

            # binarys search pointer update
            if(timeTaken <= h):
                res = min(res, k)
                r = k - 1
            else:
                l = k + 1

        return res

        