'use strict';

import express from 'express';
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Salminus API' });
});

export default router;