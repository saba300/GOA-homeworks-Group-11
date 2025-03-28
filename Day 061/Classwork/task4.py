#https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/python
def vaporcode(s):
    return '  '.join([char.upper() for char in s if char != ' '])