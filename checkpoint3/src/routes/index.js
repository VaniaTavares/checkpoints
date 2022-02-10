const router = require('express').Router();
const albumsRouter = require('./albums.router');
const tracksRouter = require('./tracks.router');

router.use('/albums', albumsRouter);
router.use('/tracks', tracksRouter);

module.exports = router;
