import unittest
from potega import isPowerOfTwoInBinary

# Aby wykonać testy należy użyć polecenia: python -m unittest -v testy.py

class TestIsPowerOfTwoInBinary(unittest.TestCase):
    def test_valid_numbers(self):
        self.assertTrue(isPowerOfTwoInBinary("1"))
        self.assertTrue(isPowerOfTwoInBinary("010"))
        self.assertTrue(isPowerOfTwoInBinary("1000"))
        self.assertTrue(isPowerOfTwoInBinary("00001"))

    def test_invalid_numbers(self):
        self.assertFalse(isPowerOfTwoInBinary("101"))
        self.assertFalse(isPowerOfTwoInBinary("0"))
        self.assertFalse(isPowerOfTwoInBinary("10101"))
        self.assertFalse(isPowerOfTwoInBinary("111111"))
        self.assertFalse(isPowerOfTwoInBinary("1000001s"))


if __name__ == '__main__':
    unittest.main()