import re
import sys

nazwa_pliku = sys.argv[1]  # aby włączyć wpisujemy w konsoli "python zliczanie_slow.py Biblia.txt"
if len(sys.argv) > 2:
  nazwa_wyniku = sys.argv[2]
else:
  nazwa_wyniku = "wynik.txt"

# wczytywanie tekstu z pliku
with open(nazwa_pliku, 'r') as plik:
    tekst = plik.read()

# usuwanie znaków specjalnych i liczb oraz zamiana na małe litery
tekst = re.sub('\d+', '', tekst)
tekst = tekst.lower()

# dzielenie tekstu na słowa
slowa = re.findall('\w+', tekst)

# tworzenie słownika z częstotliwościami słów
licznik_slow = {}
for slowo in slowa:
    if slowo in licznik_slow:
        licznik_slow[slowo] += 1
    else:
        licznik_slow[slowo] = 1

# sortowanie słów według liczby wystąpień
posortowane = sorted(licznik_slow.items(), key=lambda x: x[1], reverse=True)

res = ""
# wyświetlanie dziesięciu najczęściej występujących słów
for slowo, zlicz in posortowane[:10]:
    res += f"{slowo}: {zlicz}\n"

with open(nazwa_wyniku, 'w') as plik:
  plik.write(res)    
