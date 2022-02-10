const db = require('../config/db');

const select = `SELECT * FROM album`;

exports.getAll = async () => await db.query(select);

exports.getById = async (id) => await db.query(`${select} WHERE id = ?`, [id]);

exports.getTracks = async (id) =>
  await db.query(`SELECT * FROM track WHERE id_album = ?`, [id]);

exports.create = async ({ title, genre, picture, artist }) =>
  await db.query(
    `INSERT INTO album (title, genre, picture, artist) VALUES (?, ?, ?, ?)`,
    [title, genre, picture, artist]
  );

exports.update = async (id, newData) =>
  await db.query(`UPDATE  album SET ? WHERE id = ?`, [newData, id]);

exports.delete = async (id) =>
  await db.query(`DELETE FROM album WHERE id = ?`, [id]);
