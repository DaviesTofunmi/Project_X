# API Documentation

## Endpoints

### POST /admin

Register Super Admin

* Request Body: JSON object with admin data
* Response: JSON object with created admin data
* Example: ` POST http://localhost:8000/admin/Register`



Add a new user by Super Admin.

* Request Body: JSON object with user data
* Response: JSON object with created user data
* Example: ` POST http://localhost:8000/admin/AddUser`

### POST /users

Login for all user types

* Request Body: JSON object with user data
* Response: JSON object with created user data
* Example: ` POST http://localhost:8000/user/Login`
