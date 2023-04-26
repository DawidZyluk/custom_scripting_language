import unittest
from ip import isValidIP

# Aby wykonać testy należy użyć polecenia: python -m unittest -v testy.py

class TestIsValidIP(unittest.TestCase):
    def test_valid_adresses(self):
        self.assertTrue(isValidIP("123.123.123.123"))
        self.assertTrue(isValidIP("123.0.0.0"))
        self.assertTrue(isValidIP("123.123.0.0"))
        self.assertTrue(isValidIP("123.123.123.0"))

    def test_invalid_adresses(self):
        self.assertFalse(isValidIP("323.123.123.123"))
        self.assertFalse(isValidIP("323.123.123.123."))
        self.assertFalse(isValidIP("323.123.123"))
        self.assertFalse(isValidIP("323.123"))
        self.assertFalse(isValidIP("323"))


if __name__ == '__main__':
    unittest.main()