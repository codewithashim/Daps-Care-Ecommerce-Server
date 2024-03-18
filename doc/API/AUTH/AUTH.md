# Authentication API

This API provides endpoints for user authentication.

## Endpoints

### POST /api/auth/register

Registers a new user.

#### Request Body

| Field    | Type   | Required | Description         |
| -------- | ------ | -------- | ------------------- |
| name     | string | yes      | User's name         |
| email    | string | yes      | User's email address|
| password | string | yes      | User's password     |
| username | string | yes      | User's username     |
| phone    | string | yes      | User's phone        |


#### Response

##### Success

Status Code: 201 Created

| Field | Type   | Description         |
| ----- | ------ | ------------------- |
| token | string | Authentication token|

##### Error

Status Code: 400 Bad Request

| Field   | Type   | Description         |
| ------- | ------ | ------------------- |
| message | string | Error message       |

### POST /api/auth/login

Logs in a user.

#### Request Body

| Field    | Type   | Required | Description         |
| -------- | ------ | -------- | ------------------- |
| email    | string | yes      | User's email address|
| password | string | yes      | User's password     |

#### Response

##### Success

Status Code: 200 OK

| Field | Type   | Description         |
| ----- | ------ | ------------------- |
| token | string | Authentication token|

##### Error

Status Code: 401 Unauthorized

| Field   | Type   | Description         |
| ------- | ------ | ------------------- |
| message | string | Error message       |

### GET /api/auth/user

Gets the current user.

#### Request Headers

| Field         | Type   | Required | Description         |
| ------------- | ------ | -------- | ------------------- |
| Authorization | string | yes      | Authentication token|

#### Response

##### Success

Status Code: 200 OK

| Field | Type   | Description         |
| ----- | ------ | ------------------- |
| name  | string | User's name         |
| email | string | User's email address|

##### Error

Status Code: 401 Unauthorized

| Field   | Type   | Description         |
| ------- | ------ | ------------------- |
| message | string | Error message       |
