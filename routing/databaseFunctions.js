const uuidv1 = require('uuid/v1');

exports.add = (collection, object) => collection.push( Object.assign({}, {_id: uuidv1()}, object));

exports.update = (collection, objectId, updatedObject) => {
  const doc = collection.find(x => x._id === objectId);
  if (!doc) throw ('Document doesn`t exist');
  return Object.assign(doc, updatedObject);
};

exports.defaultResponse = (func, status) => {
  return async (req, res) => {
    try {
      const data = await func(req, res);
      res.status(status).json(data);
    } catch (err) {
      if (err instanceof Error || err instanceof TypeError) {
        err = err.message;
      }
      res.status(400).json({ message: err });
    }
  }
}
