class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l,r = 0 , len(nums) -1

        while l <= r:
            mid = (l+r)//2 #in C++/java buffer overflow can occur, fix : l + (r-l)//2

            if(target == nums[mid]):
                return mid 

            elif target < nums[mid]:
                r = mid - 1
                continue

            else :
                l = mid + 1

        return -1
