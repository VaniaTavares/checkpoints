const db = require('../config/db');

const select = 'select * from track';

exports.getAll = async () => await db.query(select);

exports.getById = async (id) => await db.query(`${select} WHERE id = ?`, [id]);

exports.create = async ({ title, youtube_url, id_album }) =>
  await db.query(
    `INSERT INTO track (title, youtube_url, id_album) VALUES (?, ?, ?) `,
    [title, youtube_url, id_album]
  );

exports.update = async (id, newData) =>
  await db.query(`UPDATE track SET ? WHERE id = ?`, [newData, id]);

exports.delete = async (id) =>
  await db.query(`DELETE FROM track WHERE id = ?`, [id]);
