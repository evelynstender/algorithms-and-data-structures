package main

import (
	"reflect"
	"testing"
)

func TestReverseArray(t *testing.T) {
	array := []int32{1, 2, 3}
	reversedArray := []int32{3, 2, 1}

	result := reverseArray(array)

	if !reflect.DeepEqual(result, reversedArray) {
		t.Errorf("Expected %v, recived %v", reversedArray, result)
	}

}

func TestHourglassSum(t *testing.T) {
	input := [][]int32{
		{1, 1, 1, 0, 0, 0},
		{0, 1, 0, 0, 0, 0},
		{1, 1, 1, 0, 0, 0},
		{0, 9, 2, -4, -4, 0},
		{0, 0, 0, -2, 0, 0},
		{0, 0, -1, -2, -4, 0},
	}

	result := hourglassSum(input)

	if result != 13 {
		t.Errorf("Expected %v, received %v", 13, result)
	}
}

func TestDynamicArray(t *testing.T) {
	var n int32 = 2
	queries := [][]int32{
		{1, 0, 5},
		{1, 1, 7},
		{1, 0, 3},
		{2, 1, 0},
		{2, 1, 1},
	}

	result := dynamicArray(n, queries)
	expected := []int32{
		7, 3,
	}

	if !reflect.DeepEqual(result, expected) {
		t.Errorf("Expected %v, recived %v", expected, result)
	}
}

func TestRotateLeft(t *testing.T) {
	arr := []int32{1, 2, 3, 4, 5}
	var input1 int32 = 2
	expectedResult1 := []int32{3, 4, 5, 1, 2}
	var input2 int32 = 4
	expectedResult2 := []int32{5, 1, 2, 3, 4}

	result1 := rotateLeft(input1, arr)
	result2 := rotateLeft(input2, arr)

	if !reflect.DeepEqual(expectedResult1, result1) {
		t.Errorf("Expected %v, recived %v", expectedResult1, result1)
	}

	if !reflect.DeepEqual(expectedResult2, result2) {
		t.Errorf("Expected %v, recived %v", expectedResult2, result2)
	}
}

func TestMatchingStrings(t *testing.T) {
	strings1 := []string{"aba", "baba", "aba", "xbxz"}
	queries1 := []string{"aba", "xbxz", "ab"}
	expectedResult1 := []int32{2, 1, 0}

	strings2 := []string{"def", "de", "fgh"}
	queries2 := []string{"de", "lmn", "fgh"}
	expectedResult2 := []int32{1, 0, 1}

	strings3 := []string{"abcde",
		"sdaklfj",
		"asdjf",
		"na",
		"basdn",
		"sdaklfj",
		"asdjf",
		"na",
		"asdjf",
		"na",
		"basdn",
		"sdaklfj",
		"asdjf"}
	queries3 := []string{"abcde", "sdaklfj", "asdjf", "na", "basdn"}
	expectedResult3 := []int32{1, 3, 4, 3, 2}

	result1 := matchingStrings(strings1, queries1)

	if !reflect.DeepEqual(result1, expectedResult1) {
		t.Errorf("Expected %v, recived %v", expectedResult1, result1)
	}

	result2 := matchingStrings(strings2, queries2)

	if !reflect.DeepEqual(result2, expectedResult2) {
		t.Errorf("Expected %v, recived %v", expectedResult2, result2)
	}

	result3 := matchingStrings(strings3, queries3)

	if !reflect.DeepEqual(result3, expectedResult3) {
		t.Errorf("Expected %v, recived %v", expectedResult3, result3)
	}
}

func TestArrayManipulation(t *testing.T) {
	var n1 int32 = 10
	queries1 := [][]int32{
		{1, 5, 3},
		{4, 8, 7},
		{6, 9, 1},
	}
	var expectedResult1 int64 = 10

	var n2 int32 = 5
	queries2 := [][]int32{
		{1, 2, 100},
		{2, 5, 100},
		{3, 4, 100},
	}
	var expectedResult2 int64 = 200

	result1 := arrayManipulation(n1, queries1)

	if expectedResult1 != result1 {
		t.Errorf("Expected %v, received %v", expectedResult1, result1)
	}

	result2 := arrayManipulation(n2, queries2)

	if expectedResult2 != result2 {
		t.Errorf("Expected %v, received %v", expectedResult2, result2)
	}
}
