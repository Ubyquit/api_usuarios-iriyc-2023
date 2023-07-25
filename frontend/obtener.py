import requests
import json

url = "http://localhost:3001/api/usuarios/"

response = requests.get(url)
usuarios = response.json()
print(usuarios)