func twoSum(nums []int, target int) []int {
	diffMap := make(map[int]int, len(nums))

	var rem int
	for idx:= range len(nums) {
		rem = target - nums[idx]

		if otherIdx, ok := diffMap[rem]; ok {
			return []int{otherIdx, idx}
		} else {
			diffMap[nums[idx]] = idx
		}
	}

    return []int{}
}