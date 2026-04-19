import { getConnection } from "../../database/connection.js";

export const getAllProducts = async () => {
    const conn = getConnection();
    const [products] = await conn.query('SELECT * FROM Products');
    return products;
}

export const getProductById = async (id) => {
    const conn = getConnection();
    const [product] = await conn.query('SELECT * FROM Products WHERE ProductID = ?', [id]);
    return product[0];
}

export const addProduct = async (productName, price, stockQuantity, supplierID) => {
    const conn = getConnection();
    const [result] = await conn.query('INSERT INTO Products (ProductName, Price, StockQuantity, SupplierID) VALUES (?, ?, ?, ?)', [productName, price, stockQuantity, supplierID]);
    return result;
}

export const updateProductPrice = async (productName, newPrice) => {
    const conn = getConnection();
    const [result] = await conn.query('UPDATE Products SET Price = ? WHERE ProductName = ?', [newPrice, productName]);
    return result;
}

export const deleteProduct = async (productName) => {
    const conn = getConnection();
    const [result] = await conn.query('DELETE FROM Products WHERE ProductName = ?', [productName]);
    return result;
}

export const getProductWithHighestStock = async () => {
    const conn = getConnection();
    const [product] = await conn.query('SELECT * FROM Products ORDER BY StockQuantity DESC LIMIT 1');
    return product[0];
}

export const getProductsNeverSold = async () => {
    const conn = getConnection();
    const [products] = await conn.query('SELECT * FROM Products WHERE ProductID NOT IN (SELECT DISTINCT ProductID FROM Sales)');
    return products;
}
