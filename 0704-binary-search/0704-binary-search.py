class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l,r = 0 , len(nums) -1
        index = -1

        while l <= r:
            mid = (l+r)//2

            if(target == nums[mid]):
                index = mid
                break

            elif target < nums[mid]:
                r = mid-1
                continue

            else :
                l = mid+ 1

        return index
