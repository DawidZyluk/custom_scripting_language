import re

regex = r'^(0*)1(0*)$'

def isPowerOfTwoInBinary(binNum):
    zgodnosc = re.match(regex, binNum)
    if zgodnosc:
        return True
    else:
        return False
