import { Router } from "express";
import { getAllSuppliers, getSupplierById, addSupplier, getSuppliersStartingWithF } from './supplier.service.js';

const router = Router();

router.get('/suppliers', async (req, res) => {
    const suppliers = await getAllSuppliers();
    res.json(suppliers);
});

router.get('/suppliers/:id', async (req, res) => {
    const { id } = req.params;
    const supplier = await getSupplierById(id);
    if (supplier) {
        res.json(supplier);
    } else {
        res.json({ message: 'Supplier not found' });
    }
});

router.post('/suppliers', async (req, res) => {
    const { supplierName, contactNumber } = req.body;
    const result = await addSupplier(supplierName, contactNumber);
    res.json({ message: 'Supplier added', result });
});

router.get('/suppliers-starting-with-f', async (req, res) => {
    const suppliers = await getSuppliersStartingWithF();
    res.json(suppliers);
});

export default router;
