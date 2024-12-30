#https://www.codewars.com/kata/58d76854024c72c3e20000de/train/python
def reverse_alternate(st):
    words = st.split()
    for i in range(1, len(words), 2):
        words[i] = words[i][::-1]
    return ' '.join(words)
