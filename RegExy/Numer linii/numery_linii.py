import sys

nazwa_pliku = sys.argv[1]  # aby włączyć wpisujemy w konsoli "python numery_linii.py zrodlo.txt"

if len(sys.argv) > 2:
  nazwa_wyniku = sys.argv[2]
else:
  nazwa_wyniku = "wynik.txt"

with open(nazwa_pliku, 'r') as plik:
    linie = plik.readlines()

res = ""
for i, linia in enumerate(linie, start=1):
    res += (f"{i}: {linia}")

with open(nazwa_wyniku, 'w') as plik:
    plik.write(res)    




