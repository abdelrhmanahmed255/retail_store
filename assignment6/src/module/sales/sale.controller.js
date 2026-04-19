import { Router } from "express";
import { getAllSales, getSaleById, addSale, getTotalQuantitySoldPerProduct, getSalesWithProductDetails } from './sale.service.js';

const router = Router();

router.get('/sales', async (req, res) => {
    const sales = await getAllSales();
    res.json(sales);
});

router.get('/sales/:id', async (req, res) => {
    const { id } = req.params;
    const sale = await getSaleById(id);
    if (sale) {
        res.json(sale);
    } else {
        res.json({ message: 'Sale not found' });
    }
});

router.post('/sales', async (req, res) => {
    const { productID, quantitySold, saleDate } = req.body;
    const result = await addSale(productID, quantitySold, saleDate);
    res.json({ message: 'Sale added', result });
});

router.get('/sales-total-quantity', async (req, res) => {
    const results = await getTotalQuantitySoldPerProduct();
    res.json(results);
});

router.get('/sales-with-products', async (req, res) => {
    const results = await getSalesWithProductDetails();
    res.json(results);
});

export default router;
