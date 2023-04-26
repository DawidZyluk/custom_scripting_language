import sys
import re

nazwa_pliku = sys.argv[1]  # aby włączyć wpisujemy w konsoli "python kropki_i_przecinki.py kropki_i_przecinki.txt"
if len(sys.argv) > 2:
 nazwa_wyniku = sys.argv[2]
else:
 nazwa_wyniku = "wynik.txt"

with open(nazwa_pliku, 'r') as plik:
    tekst = plik.read()

tekst = re.sub(r'(?<=[.,])(?=[^\s\d\.\,])', r' ', tekst)

with open(nazwa_wyniku, 'w') as plik:
    plik.write(tekst)
