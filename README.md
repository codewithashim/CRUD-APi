# INSTALLETION GIDE 

```
git clone https://github.com/codewithashim/CRUD-APi.git
```

`cd  CRUD-APi`

```
yarn install
```

## **If Useing Docker**

```
docker-compose up --build
```

# **API DOCUMENTATION** 


| API  | METHOD | BASE URL                      | ROUTE           |
| ---- | ------ | ----------------------------- | --------------- |
| user | GET    | http://localhost:8000/api/v1/ | users           |
| user | GET    | http://localhost:8000/api/v1/ | users/:username |
| user | POST   | http://localhost:8000/api/v1/ | users           |
| user | PUT    | http://localhost:8000/api/v1/ | users/:username |
| user | DELETE | http://localhost:8000/api/v1/ | users/:username |

# PROJECT STRUCTURE 

- crud-api
  - controllers
    - userController.js
  - routes
    - userRoutes.js
  - models
    - user.js
  - middleware
    - responseMiddleware.js
  - app.js
  - package.json
  - Dockerfile
  - docker-compose.yml
