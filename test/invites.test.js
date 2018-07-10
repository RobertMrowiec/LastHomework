const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');

chai.use(chaiHttp);

let _id;

  describe('GET Invitations', () => {
    it('should return array of invitations', (done) => {
      chai.request(server)
          .get('/api/invitations')
          .end((err, res) => {
            res.should.be.json;
            res.should.have.status(200);
            res.body.should.be.an('array');
            done();
          });
    });
  });

  describe('ADD Invitations', () => {

    it('should add invite to database', (done) => {
      chai.request(server)
          .post('/api/invitations')
          .type('json')
          .send({
            'invitee':'Robert Mrowiec',
            'email':'test@icloud.com'
          })
          .end((err, res) => {
            res.should.have.status(201);
            res.should.be.json;
            res.body.should.be.an('object');
            done();
          });
    });

    it('should throw error during adding invitation to database without invitee', (done) => {
      chai.request(server)
          .post('/api/invitations')
          .type('json')
          .send({
            'email':'test@icloud.com'
          })
          .end((err, res) => {
            res.should.be.json;
            res.should.have.status(400);
            done();
          });
    });

    it('should throw error during adding invitation to database without email', (done) => {
      chai.request(server)
          .post('/api/invitations')
          .type('json')
          .send({
            'invitee':'Robert Mrowiec'
          })
          .end((err, res) => {
            res.should.be.json;
            res.should.have.status(400);
            done();
          });
    });

    it('should throw error during adding invitation to database with wrong email', (done) => {
      chai.request(server)
          .post('/api/invitations')
          .type('json')
          .send({
            'invitee':'Robert Mrowiec',
            'email':'dsa.gmail.com'
          })
          .end((err, res) => {
            res.should.be.json;
            res.should.have.status(400);
            done();
          });
    });

    it('should return array of invitations with one previously added object', (done) => {
      chai.request(server)
          .get('/api/invitations')
          .end((err, res) => {
            res.should.be.json;
            res.should.have.status(200);
            res.body.should.be.an('array');
            res.body.should.have.lengthOf(1);
            res.body[0].should.contain({invitee: 'Robert Mrowiec'});
            _id = res.body[0]._id;
            done();
          });
    });
  });

  describe('UPDATE Invitations', () => {

    it('should throw error during updating invitation to database with wrong "email"', (done) => {
      chai.request(server)
          .put('/api/invitations/' + _id)
          .type('json')
          .send({
            'email': 'asd',
            'invitee': 'eweqwewq'
          })
          .end((err, res) => {
            res.should.be.json;
            res.should.have.status(400);
            done();
          });
    });

    it('should throw error during updating invitation to database without email', (done) => {
      chai.request(server)
          .put('/api/invitations/' + _id)
          .type('json')
          .send({
            'invitee': 'dsadas'
          })
          .end((err, res) => {
            res.should.be.json;
            res.should.have.status(400);
            done();
          });
    });

    it('should throw error during updating invitation to database without invitee', (done) => {
      chai.request(server)
          .put('/api/invitations/' + _id)
          .type('json')
          .send({
            'email': 'asd'
          })
          .end((err, res) => {
            res.should.be.json;
            res.should.have.status(400);
            done();
          });
    });


    it('should add accepted status to object', (done) => {
      chai.request(server)
          .get('/api/invitations/confirm/' + _id)
          .end((err, res) => {
            res.should.be.json;
            res.should.have.status(200);
            res.body.should.be.an('object');
            done();
          });
    });

    it('should add declined status to object', (done) => {
      chai.request(server)
          .get('/api/invitations/decline/' + _id)
          .end((err, res) => {
            res.should.be.json;
            res.should.have.status(200);
            res.body.should.be.an('object');
            done();
          });
    });
  });

  describe('GetByID Invitation', () => {

    it('should return only one object from invitations array', (done) => {
      chai.request(server)
          .get('/api/invitations/' + _id)
          .end((err, res) => {
            res.should.be.json;
            res.should.have.status(200);
            res.body.should.be.an('object')
            res.body.should.contain({invitee: 'Robert Mrowiec'});
            done();
          });
    });

    it('should return error if object with specific ID doesn`t exist', (done) => {
      chai.request(server)
          .get('/api/invitations/1321312ewqeqw')
          .end((err, res) => {
            res.should.be.json;
            res.should.have.status(400);
            res.body.should.be.an('object');
            res.body.should.contain({message: 'Document with specific ID doesn`t exist'});

            done();
          });
    });
  });
