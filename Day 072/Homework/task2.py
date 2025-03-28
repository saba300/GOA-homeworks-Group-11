'''https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/python'''
def sort_array(arr):
    odd_numbers = [num for num in arr if num % 2 != 0]
    odd_numbers.sort()
    
    odd_index = 0
    result = []
    for num in arr:
        if num % 2 != 0:
            result.append(odd_numbers[odd_index])
            odd_index += 1
        else:
            result.append(num)
    
    return result