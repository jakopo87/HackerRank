#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'counterGame' function below.
#
# The function is expected to return a STRING.
# The function accepts LONG_INTEGER n as parameter.
#

# 1
# def counterGame(n):
#     result = 0
#     while n > 1:
#         result += 1
#         p = 2**int(math.log2(n))
#         if n == p:
#             n >>= 1
#         else:
#             n^=p
#     return "Louise" if result % 2 else "Richard"

# 2


def counterGame(n):
    result = 0
    while n > 1:
        result += 1
        p = 2**int(math.log2(n))
        n -= n/2 if n == p else p
    return "Louise" if result % 2 else "Richard"


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    t = int(input().strip())

    for t_itr in range(t):
        n = int(input().strip())

        result = counterGame(n)

        fptr.write(result + '\n')

    fptr.close()
