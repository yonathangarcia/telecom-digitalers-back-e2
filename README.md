# Telecom-digitalers-proyecto-e2
 segunda entrega telecom digitalers node.js
para registrar un usuario usar la direccion del deploy
en postman, tipo json, usar la ruta /users/register
(https://telecom-digitaler-proyecto-e2.onrender.com/users/register)
el formato para el registro es usando un body en raw json con este formato:
{
    "username": "user",
    "email": "mail@mail.com",
    "password": "user",
    "role": "user"
}
el rol por defecto es user cuando no se asigna un role valido o se asigna un rol diferente de "admin"
para crear un usuario admin se debe ingresar "admin" en el role de registro

el login en la ruta /users/login
(https://telecom-digitaler-proyecto-e2.onrender.com/users/login)
igual con el formato
{
    "email":"mail@mail.com"
    "password":"user"
}
