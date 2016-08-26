# Express Errors
Simple HTTP staus handling for Express Apps

## Installing

This package is designed to streamline the process of sending statuses and data to the console, though the data part currently needs to be implemented. To install, simply run `npm install --save express-status-helper` in the bash of your current project. 

Inside the routes file that needs to send errors and statuses (likely all of them' add `var esh = require("express-status-helper");` at the top of your document. Then all you have to do is call the function `esh` whenever you want to send data to the client.

## Usage

`esh` takes two mandatory arguments and one optional argument. You must pass in the response object from express and a staus code. Optionally, you may also include a custom message to be used instead of the preloaded messages.

### Example Use
```javascript
var esh = require("express-status-helper");

router.post("/", function(req,res,next) {
  // example request requires "email" key in body
  if (!req.body.email) return esh(res, 400); 
  
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

## TODO
- [ ] option to add data upon success responses
- [ ] required header parameters for failure codes (esp. 401, 407, etc.)
- [ ] additional markdown doc with documentation for each status code
