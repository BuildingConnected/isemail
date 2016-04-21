var originalIsEmail = require('./original')

module.exports = function isEmail(email) {
	return originalIsEmail.validate(email, { errorLevel: 0 }) === 0
}
