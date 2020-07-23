## User Authentication

### Google oAuth

POST `/login/google`

#### REQUEST

```json
{
     
	"token": "STRING",
}
```

#### RESPONSE

```json
{
    "logged_in": "true",
    "token": "<auth_token>"
}
```

### Facebook oAuth

POST `/login/facebook`

#### REQUEST

```json
{
     
	"name": "STRING",
    "email": "STRING",
    "user_uuid": "STRING",
}
```

#### RESPONSE

```json
{
    "logged_in": "true",
    "token": "<auth_token>"
}
```

### Native login

POST `/login/native`

#### REQUEST

```json
{
     
    "email": "STRING",
    "password": "STRING",
}
```

#### RESPONSE

Success response

```json
{
    "logged_in": "true",
    "token": "<auth_token>"
}
```
Failure response
```json
{
    "logged_in": "false",
    "message": "Username is invalid"
}
```

### Login token validation

POST `/login/validation`

#### REQUEST

```json
{
    "token": "<auth_token>"
}
```

#### REQUEST

```json
{
    "name": "User name",
    "email": "User email address"
}
```

### Native register

POST `/register/native`

#### REQUEST

```json
{
     
	"name": "STRING",
    "email": "STRING",
    "password": "STRING",
}
```

#### RESPONSE

```json
{
    "status":"success",
    "message":"registration successfull"
}
```

## Listing page

### Get all listings

GET `/listing/display?search_query=Bengaluru,Mysuru&page=1&per_page=10&category=hotel,villa&amenities=wifi,ac&price=0-1500,2500-3500`

#### Request

```json
{
    "search_query":"STRING",
    "page":"INTEGER",
    "per_page":"INTEGER",
    "category":"STRING",
    "amenities":"STRING",
    "price":"STRING"
}
```
#### Response

[`array of properties`]







