#Matrix creation

def get_matrix(n):
    matrix = []
    for i in range(n):
        row = []
        for j in range(n):
            if i == j:
                row.append(1)
            else:
                row.append(0)  
        matrix.append(row)
    return matrix