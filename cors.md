FORMAT: 1A

# CORS tests

## POST /Security/Authentication

Check content type.

+ Response 200 (application/json)

        {
            "Token": "93d9f8d01cf5e08e2b238c353582aac0394530a310d17fc4459974aa44267c09c4b6bac1fd02c1aeb41ac94b3a024ae8a03cc72b6045c1d3d00dbeb0b2f51a70"
        }

## OPTIONS /Security/Login

Preflight for login.

+ Request
    + Headers

            Origin: http://foo.example
            Access-Control-Request-Method: POST
            Access-Control-Request-Headers: accept, content-type

+ Response
    + Headers

            Access-Control-Allow-Origin: *
            Access-Control-Allow-Methods: OPTIONS,POST
            Access-Control-Allow-Headers: accept,content-type

## User [/HR/User/{Id}]

A single User resource.

+ Parameters
    + Id (number, `2`) ... User Id.

### OPTIONS

Test preflight.

+ Request
    + Headers

            Origin: http://foo.example
            Access-Control-Request-Method: GET
            Access-Control-Request-Headers: accept, authorization

+ Response
    + Headers

            Access-Control-Allow-Origin: *
            Access-Control-Allow-Headers: accept,authorization
            Access-Control-Allow-Methods: OPTIONS,GET,DELETE,PATCH
