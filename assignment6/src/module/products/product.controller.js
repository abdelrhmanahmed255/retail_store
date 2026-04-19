import { Router } from "express";
import { getAllProducts, getProductById, addProduct, updateProductPrice, deleteProduct, getProductWithHighestStock, getProductsNeverSold } from './product.service.js';

const router = Router();

router.get('/products', async (req, res) => {
    const products = await getAllProducts();
    res.json(products);
});

router.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await getProductById(id);
    if (product) {
        res.json(product);
    } else {
        res.json({ message: 'Product not found' });
    }
});

router.post('/products', async (req, res) => {
    const { productName, price, stockQuantity, supplierID } = req.body;
    const result = await addProduct(productName, price, stockQuantity, supplierID);
    res.json({ message: 'Product added', result });
});

router.put('/products/update-price', async (req, res) => {
    const { productName, newPrice } = req.body;
    const result = await updateProductPrice(productName, newPrice);
    if (result.affectedRows > 0) {
        res.json({ message: 'Product price updated' });
    } else {
        res.json({ message: 'Product not found' });
    }
});

router.delete('/products/:productName', async (req, res) => {
    const { productName } = req.params;
    const result = await deleteProduct(productName);
    if (result.affectedRows > 0) {
        res.json({ message: 'Product deleted' });
    } else {
        res.json({ message: 'Product not found' });
    }
});

router.get('/products-highest-stock', async (req, res) => {
    const product = await getProductWithHighestStock();
    res.json(product);
});

router.get('/products-never-sold', async (req, res) => {
    const products = await getProductsNeverSold();
    res.json(products);
});

export default router;
