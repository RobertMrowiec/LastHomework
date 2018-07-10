const validator = require("email-validator");
const { add, update, defaultResponse } = require('../databaseFunctions');
const { sendMail } = require('../emailFunction');
const invitationArray = [];

exports.get = defaultResponse(req => invitationArray, 200);

exports.getById = defaultResponse(req => {
  const findOne = invitationArray.find(x => x._id === req.params.id);
  if(!findOne) throw 'Document with specific ID doesn`t exist';
  return findOne;
}, 200);

exports.post = defaultResponse(req => {
  if ((!req.body.email || !req.body.invitee) || !validator.validate(req.body.email)) throw 'Wrong email or invitee';
  add(invitationArray, req.body);
  return sendMail(req.body.email, 'New invitation', 'Added new invitation', 'Added new invitation');
}, 201)

exports.update = defaultResponse(req => {
  if ((!req.body.email || !req.body.invitee) || !validator.validate(req.body.email)) throw 'Wrong email or invitee';
  update(invitationArray, req.params.id, req.body);
  return 'Updated succesfully';
}, 200);

exports.confirm = defaultResponse(req => {
  const newObject = update(invitationArray, req.params.id, {status: 'Confirmed'});
  return sendMail(newObject.email, 'Updated invitation', 'Confirmed Your invitation', 'Confirmed invitation')
    .then(data => data)
    .catch(err => err);
}, 200);

exports.decline = defaultResponse(req => {
  const newObject = update(invitationArray, req.params.id, {status: 'Declined'});
  return sendMail(newObject.email, 'Updated invitation', 'Declined Your invitation', 'Declined invitation')
    .then(data => data)
    .catch(err => err);
}, 200);
