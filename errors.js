// ----------------------------------------------
// ERROR HANDLER SCAFFOLDING FOR ROUTES
// ----------------------------------------------
var codes = require('./errors.json');

// error handler message, sends error messages in json
module.exports = function(res,err,message,data) {
		err = parseInt(err);
		if (isNaN(err) || codes[err] === undefined) 
			throw Error("Don't go breaking the error handler");
		message = message || codes[err];
		return res.status(err).json({
			success: (err < 400 ? true : false),
			message: message,
			data: data
		});
	}
