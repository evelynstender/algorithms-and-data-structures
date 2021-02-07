package main

func reverseArray(a []int32) []int32 {
	var reversedArray []int32

	for i := len(a) - 1; i >= 0; i-- {
		reversedArray = append(reversedArray, a[i])
	}

	return reversedArray
}

func hourglassSum(arr [][]int32) int32 {
	var maxSum int32 = -63

	for row := 0; row < 4; row++ {
		for col := 0; col < 4; col++ {
			first := arr[row][col] + arr[row][col+1] + arr[row][col+2]
			second := arr[row+1][col+1]
			third := arr[row+2][col] + arr[row+2][col+1] + arr[row+2][col+2]

			sum := first + second + third

			if sum > maxSum {
				maxSum = sum
			}
		}
	}

	return maxSum
}

func dynamicArray(n int32, queries [][]int32) []int32 {
	var lastAnswer int32 = 0
	var result []int32
	var arr [][]int32

	for i := 0; i <= int(n); i++ {
		var value []int32
		arr = append(arr, value)
	}

	for _, v := range queries {
		idx := (v[1] ^ lastAnswer) % n

		if v[0] == 1 {
			arr[idx] = append(arr[idx], v[2])
		} else if v[0] == 2 {
			lastAnswer = arr[idx][v[2]%int32(len(arr[idx]))]
			result = append(result, lastAnswer)
		}
	}

	return result
}

func rotateLeft(d int32, arr []int32) []int32 {
	result := arr

	for i := 0; i < int(d); i++ {
		shift := result[0]
		result = result[1:]

		result = append(result, shift)

	}

	return result

}

func matchingStrings(strings []string, queries []string) []int32 {

	var result []int32

	for i := 0; i < len(queries); i++ {
		result = append(result, 0)

		for j := 0; j < len(strings); j++ {
			if queries[i] == strings[j] {
				result[i] = result[i] + 1
			}
		}
	}

	return result

}

func arrayManipulation(n int32, queries [][]int32) int64 {

	var maxValue int64 = 0

	var arr []int32

	arr = make([]int32, n)

	for _, v := range queries {
		a := v[0]
		b := v[1]
		k := v[2]

		for i := a - 1; i < b; i++ {

			arr[i] = arr[i] + k

			if arr[i] > int32(maxValue) {
				maxValue = int64(arr[i])
			}
		}

	}

	return maxValue

}
