const router = require('express').Router();
const { albumModel } = require('../models');

router.get('/', async (req, res, next) => {
  try {
    const [albums] = await albumModel.getAll();

    res.send(albums);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const [album] = await albumModel.getById(req.params.id);

    if (!album[0]) return res.status(404).send();

    res.send(album[0]);
  } catch (err) {
    next(err);
  }
});

router.get('/:id/tracks', async (req, res, next) => {
  try {
    const [tracks] = await albumModel.getTracks(req.params.id);

    res.send(tracks);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const [createdAlbum] = await albumModel.create(req.body);
    const [album] = await albumModel.getById(createdAlbum.insertId);

    res.status(201).send(album[0]);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    await albumModel.update(req.params.id, req.body);

    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await albumModel.delete(req.params.id);

    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
