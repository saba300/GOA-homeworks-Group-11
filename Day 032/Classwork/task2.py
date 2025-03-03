'''Isograms'''

def is_isogram(string):
    string=string.upper()
    for i in string:
        if string.count(i)>1:
            return False
        
    return True