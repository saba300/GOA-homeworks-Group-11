'''Duplicate Encoder'''


def duplicate_encode(word):
    string=""
    word=word.upper()
    for i in word:
        if word.count(i)==1:
            string=string+'('
        else:
            string=string+')'
    return string