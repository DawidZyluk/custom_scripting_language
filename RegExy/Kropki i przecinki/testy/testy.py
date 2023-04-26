import unittest
import subprocess
import filecmp

# Aby wykonać testy należy użyć polecenia: python -m unittest -v testy.py

class TestKropki_i_przeciniki(unittest.TestCase):
    def test_1(self):
        cmd_str = "python ../kropki_i_przecinki.py test_1_input.txt test_1_output.txt"
        subprocess.run(cmd_str, shell=True)
        self.assertTrue(filecmp.cmp("test_1_output.txt", "test_1_correct.txt"))

    def test_2(self):
        cmd_str = "python ../kropki_i_przecinki.py test_2_input.txt test_2_output.txt"
        subprocess.run(cmd_str, shell=True)
        self.assertTrue(filecmp.cmp("test_2_output.txt", "test_2_correct.txt"))


if __name__ == '__main__':
    unittest.main()
