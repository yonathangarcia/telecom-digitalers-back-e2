# Telecom-digitalers-proyecto-e2  
## segunda entrega telecom digitalers node.js  
Para registrar un usuario usar la direccion del deploy  
En postman, POST, usar la ruta /users/register  
(https://telecom-digitaler-proyecto-e2.onrender.com/users/register)  
el formato para el registro es usando un body en raw json:  

{  
    "username": "user",  
    "email": "mail@mail.com",  
    "password": "user",  
    "role": "user"  
}  

el rol por defecto es user cuando no se asigna un role valido o se asigna un rol diferente de "admin"  
para crear un usuario admin se debe ingresar "admin" en el role de registro  

el login en la ruta /users/login tambien con POST  
(https://telecom-digitaler-proyecto-e2.onrender.com/users/login)  

{  
    "email":"mail@mail.com"  
    "password":"user"  
}  
