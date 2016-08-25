// ----------------------------------------------
// ERROR HANDLER SCAFFOLDING FOR ROUTES
// ----------------------------------------------
var errors = require('./errors.json');

// error handler message, sends error messages in json
module.exports = function(res,err,message) {
		err = parseInt(err);
		if (isNaN(err) || errors[err] === undefined) 
			throw Error("Don't go breaking the error handler");
		message = message || errors[err];
		return res.status(err).send({
			success: false,
			message: message
		});
	}
