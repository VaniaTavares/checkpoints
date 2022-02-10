const router = require('express').Router();

const { trackModel } = require('../models');

router.get('/', async (_req, res, next) => {
  try {
    const [tracks] = await trackModel.getAll();

    if (!tracks) return res.status(404).send();

    res.send(tracks);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const [tracks] = await trackModel.getById(req.params.id);

    if (!tracks[0]) return res.status(404).send();

    res.send(tracks[0]);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const [createdTrack] = await trackModel.create(req.body);
    const [track] = await trackModel.getById(createdTrack.insertId);

    res.status(201).send(track[0]);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    await trackModel.update(req.params.id, req.body);

    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await trackModel.delete(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
