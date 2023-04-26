import re

regex = r'^((([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\.){3}([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]))$'

def isValidIP(ip):
    zgodnosc = re.match(regex, ip)
    if zgodnosc:
        return True
    else:
        return False