import express from 'express';
import { ExpressValidator } from 'express-validator';
import CacheController from '../controllers/cacheController';
import logRequest from '../middleware/logger';

let router = express.Router();

router.use(logRequest);

router.get('/cache/:key', CacheController.getValue);

router.post('/cache/:key', CacheController.createEntry);

router.delete('/cache/:key', CacheController.deleteEntry);

export { router as cacheRouter };