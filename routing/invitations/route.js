const express = require ('express');
const router = express.Router();
const invitation = require('./details');

router.get('/', invitation.get)
      .get('/:id', invitation.getById)
      .get('/confirm/:id', invitation.confirm)
      .get('/decline/:id', invitation.decline)
      .post('/', invitation.post)
      .put('/:id', invitation.update);

module.exports = router;
