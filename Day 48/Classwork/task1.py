def smaller(arr):
    num_arr=[]
    cnt=0
    for i in range(len(arr)):
        cnt=0
        for j in range(i+1, len(arr)):
            if arr[i]>arr[j]:
                cnt+=1
        num_arr.append(cnt)
    return num_arr