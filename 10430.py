# https://www.acmicpc.net/problem/10430
A = 0
B = 0
C = 0

A, B, C = input().split()
A = int(A)
B = int(B)
C = int(C)

D = (A+B)%C
print(D)

D = ((A%C) + (B%C)) % C
print(D)

D = (A*B)%C
print(D)

D = ((A%C) * (B%C))%C
print(D)