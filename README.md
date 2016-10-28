# Express Status Helper
Simple HTTP staus handling for Express Apps

Use [HTTP Status Codes](https://httpstatuses.com/) for reference on proper status usage

## Installing

In command line: `npm install --save express-status-helper` 

Wherever you use it: `var esh = require("express-status-helper");`

## Usage

`esh` takes three arguments. You must pass in the response object from express and a staus code. Optionally, you may also include an object with a custom message to be used instead of the preloaded messages and a data object to send back in the json object.

### Example Use
```javascript
var router = express.Router();
var esh = require("express-status-helper");

router.post("/", function(req,res,next) {
	var onSuccess = {
    message: "Hooray! It worked!",
		data: {
      foo: "bar"
    }
	};
  // example request requires "email" key in body
  if (!req.body.email) return esh(res, 400); 
  else return esh(res, 200, onSuccess)
})
```

### Example Responses (for the above example)
```json
{
  "success": false,
  "message": "Authentication failed or not provided"
}
```

```json
{
  "success": true,
  "message": "Hooray! It worked!",
  "data": {
		"foo": "bar",
	}
}
```
## TODO
- [x] option to add data upon success responses
- [ ] required header parameters for failure codes (esp. 401, 407, etc.)
- [ ] additional markdown doc with documentation for each status code
