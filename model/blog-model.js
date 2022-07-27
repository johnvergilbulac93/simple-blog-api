const conn = require("../database/mysql");

module.exports = {
  show: (data, callback) => {
    if (data.query.title) {
      conn.query(
        "SELECT * from blogs where title like ?",
        [`%${data.query.title}%`],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    } else {
      conn.query(
        "Select * from blogs order by id",
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    }
  },
  create: (data, callback) => {
    conn.query(
      "Insert into blogs(title, description, image) values(?,?,?)",
      [data.title, data.description, data.image],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  showById: (id, callback) => {
    conn.query(
      "select * from blogs where id = ?",
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  update: (data, callback) => {
    conn.query(
      "update blogs set title = ?, description = ?, image = ? where id = ?",
      [data.title, data.description, data.image , data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
  remove: (id, callback) => {
    conn.query(
      "Delete from blogs where id = ?",
      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results[0]);
      }
    );
  },
};
