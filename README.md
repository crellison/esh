# Express Errors
Simple error handling for Express Apps

## Installing

This package is designed to streamline the process of sending statuses and data to the console, though the data part currently needs to be implemented. To install, simply run `npm install --save express-errors` in the bash of your current project. 

Inside the routes file that needs to send errors and statuses (likely all of them' add `var error = require("express-errors");` at the top of your document. Then all you have to do is call the function `error` whenever you want to send data to the client.

## Usage

`error` takes two mandatory arguments and one optional argument. You must pass in the response object from express and a staus code. Optionally, you may also include a custom message to be used instead of the preloaded messages.

### Example Use
```javascript
var error = require("express-errors");

router.post("/", function(req,res,next) {
  // example request requires "email" key in body
  if (!req.body.email) return error(res, 400); 
  
  ...
})
```

### Example Response (for the above example)
```json
{
  "success": false,
  "message": "Authentication failed or not provided"
}
```

I currently need to add functionality for adding data upon success responses, but all standard HTTP status codes are currently supported.
