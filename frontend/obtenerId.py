import requests
import json

id = input("Ingresa un id:")

url = f"http://localhost:3001/api/usuarios/{id}"

response = requests.get(url)
usuarios = response.json()
print(usuarios)