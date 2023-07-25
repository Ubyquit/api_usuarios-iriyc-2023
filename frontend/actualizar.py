import requests
import json

usuario_actualizar = {
    "nombre": "Luis Fernando",
    "apellido_paterno": "Villafaña",
    "apellido_materno": "Rejón",
    "edad": 33,
    "numero_telefonico": "9982328666",
    "email": "luisito@gmail.com",
    "direccion": "Cancún",
    "fotografia": "luis.jpeg"
}

id = input("Ingresa un id: ")
url = f"http://localhost:3001/api/usuarios/{id}"

response = requests.put(url,
                         data = json.dumps(usuario_actualizar),
                         headers = {'Content-Type': 'application/json'})

print(response.json())
