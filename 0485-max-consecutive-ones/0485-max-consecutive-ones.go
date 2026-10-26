func findMaxConsecutiveOnes(nums []int) int {
	var cnt, mx int

	for _, n := range nums {
		if n == 1 {
			cnt++
			mx = max(cnt, mx)
		} else {
			cnt = 0
		}
	}

	return mx
}