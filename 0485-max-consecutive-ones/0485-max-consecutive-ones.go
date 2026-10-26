func findMaxConsecutiveOnes(nums []int) int {
	var (
		cnt = 0
		mx  = 0
	)

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