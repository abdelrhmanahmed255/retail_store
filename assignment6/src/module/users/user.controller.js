import { Router } from "express";
import { createStoreManager } from './user.service.js';

const router = Router();

router.post('/create-store-manager', async (req, res) => {
    try {
        const result = await createStoreManager();
        res.json(result);
    } catch (error) {
        res.json({ error: error.message });
    }
});

export default router;
