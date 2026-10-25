func twoSum(nums []int, target int) []int {
	diffMap := make(map[int]int, len(nums))

	var rem int
	for idx, num := range nums {
		rem = target - num

		if otherIdx, ok := diffMap[rem]; ok {
			return []int{otherIdx, idx}
		} else {
			diffMap[num] = idx
		}
	}

    return []int{}
}