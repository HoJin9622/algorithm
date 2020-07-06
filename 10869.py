# https://www.acmicpc.net/problem/10869

import math

A = 0
B = 0

A, B = input().split()

print(int(A)+int(B))
print(int(A)-int(B))
print(int(A)*int(B))
print(math.trunc(int(A)/int(B)))
print(int(A)%int(B))