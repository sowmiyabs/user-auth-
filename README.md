User Authentication and Authorization with Bearer Token
This application demonstrates user authentication and authorization using JWT (JSON Web Tokens) with Bearer tokens. It includes user registration, login, and protected routes that require a valid token for access.
## Features
create a new user account.
POST /api/auth/register
{
  "username": "John",
  "email": "john@example.com",
  "password": "123456"
}

then login with the registered credentials like email and password.
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "123456"
}
The response will include a JWT token:

then access protected routes by including the JWT token in the Authorization header as a Bearer token.
GET /api/auth/me
Authorization: Bearer <JWT_TOKEN>
response:

 "user": {
        "userId": "6980b53cecdded98a5965720",
        "email": "john@example.com",
        "iat": 1770042819,
        "exp": 1770046419
    }


   Token "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTgwYjUzY2VjZGRlZDk4YTU5NjU3MjAiLCJlbWFpbCI6ImpvaG5AZXhhbXBsZS5jb20iLCJpYXQiOjE3NzAwNDI4MTksImV4cCI6MTc3MDA0NjQxOX0.reoXM4PW92BIndDNCQ_ziVKvQoCDZOgVrRVsnbb_95A"

then we go https://jwt.io/
 and paste the token to verify its content and signature.
 then we received the payload data including userId and email.
