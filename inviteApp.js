const app = require('./app');

app.set('port', 8020);

const server = app.listen(app.get('port'), (req, res) => {
    console.log("Server is running on port : " + app.get('port'));
});
