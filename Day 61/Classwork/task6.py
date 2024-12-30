#https://www.codewars.com/kata/5868812b15f0057e05000001/train/python
def tail_swap(strings):
    before_1, after_1 = strings[0].split(":")
    before_2, after_2 = strings[1].split(":")
    return [before_1 + ":" + after_2, before_2 + ":" + after_1]