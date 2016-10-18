// ----------------------------------------------
// ERROR HANDLER SCAFFOLDING FOR ROUTES
// ----------------------------------------------
var codes = require('./errors.json');

// error handler message, sends error messages in json
module.exports = function(res,err,obj) {
		obj = obj || {};
		err = parseInt(err);
		if (isNaN(err) || codes[err] === undefined) 
			throw Error("Don't go breaking the error handler");
		message = obj.message || codes[err];
		return res.status(err).json({
			success: (err < 400 ? true : false),
			message: message,
			data: obj.data || undefined
		});
	}
