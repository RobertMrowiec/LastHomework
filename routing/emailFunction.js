const validator = require("email-validator");

exports.sendMail = async (email, subject, description, status) => {
  if (!validator.validate(email)) throw new Error ('Wrong email')

  return {
   'status': `${status}`,
   'message': { 'receiver': email, 'subject': subject, 'description': description }
  }
};
