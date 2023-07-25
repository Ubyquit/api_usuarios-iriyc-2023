import requests
import json

usuarioNuevo = {
    "nombre": "Luis",
    "apellido_paterno": "Villafaña",
    "apellido_materno": "Rejón",
    "edad": 33,
    "numero_telefonico": "9982328666",
    "email": "luis@gmail.com",
    "direccion": "Cancún",
    "fotografia": "luisito.jpeg"
}

url = "http://localhost:3001/api/usuarios/"

response = requests.post(url,
                         data = json.dumps(usuarioNuevo),
                         headers = {'Content-Type': 'application/json'})

print(response.json())
