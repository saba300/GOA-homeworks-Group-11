'''Sum of two lowest positive integers'''

def sum_two_smallest_numbers(numbers):
    minimum_1=min(numbers)
    numbers.remove(minimum_1)
    minimum_2=min(numbers)
    sum=minimum_1+minimum_2
    return sum