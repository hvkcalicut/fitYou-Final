const mongoClient = require('mongodb').MongoClient;

const state = {
  db: null,
};
module.exports.connect = function (done) {
  // url
  const url = 'mongodb+srv://harshavardhank399:I6DgACb3F69gdQNC@cluster0.ggrowx7.mongodb.net/';
  // database name
  const dbname = 'fityou';

  mongoClient.connect(url, (err, data) => {
    if (err) return done(err);
    state.db = data.db(dbname);
    done();
  });
};
module.exports.get = function () {
  return state.db;
};
