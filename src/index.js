import express from 'express';
import graphqlHTTP from 'express-graphql';
import expressPlayground from 'graphql-playground-middleware-express';
import cors from 'cors';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import index from './routes/index';
import Schema from './schemas';

const port = process.env.PORT || 5000;
const app = express();

mongoose.Promise = global.Promise;

var MONGO_DB;
var DOCKER_DB = process.env.DB_PORT;
if (DOCKER_DB) {
  MONGO_DB = DOCKER_DB.replace('tcp', 'mongodb') + '/avatax';
} else {
  MONGO_DB = 'mongodb://localhost/avatax';
}

mongoose.connect(MONGO_DB);

var db = mongoose.connection;
db.on('error', () => { console.log('---FAILED to connect to mongoose') })
db.once('open', () => {
  console.log('+++Connected to mongoose')
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/graphql', graphqlHTTP(req => ({
  schema: Schema,
  graphiql: true
})));

app.get('/graphql-playground', expressPlayground({ endpoint: '/graphql' }));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port);

console.log('Salminus API server started on: ' + port);