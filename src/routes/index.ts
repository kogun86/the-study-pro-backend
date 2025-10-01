import { Router } from 'express';

import healthRoute from './health.route.js';

const router = Router();

// Health check route
router.use('/health', healthRoute);

// Domain routes

export default router;
