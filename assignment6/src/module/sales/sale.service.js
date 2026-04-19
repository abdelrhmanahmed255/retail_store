import { getConnection } from "../../database/connection.js";

export const getAllSales = async () => {
    const conn = getConnection();
    const [sales] = await conn.query('SELECT * FROM Sales');
    return sales;
}

export const getSaleById = async (id) => {
    const conn = getConnection();
    const [sale] = await conn.query('SELECT * FROM Sales WHERE SaleID = ?', [id]);
    return sale[0];
}

export const addSale = async (productID, quantitySold, saleDate) => {
    const conn = getConnection();
    const [result] = await conn.query('INSERT INTO Sales (ProductID, QuantitySold, SaleDate) VALUES (?, ?, ?)', [productID, quantitySold, saleDate]);
    return result;
}

export const getTotalQuantitySoldPerProduct = async () => {
    const conn = getConnection();
    const [results] = await conn.query('SELECT ProductID, SUM(QuantitySold) AS TotalQuantitySold FROM Sales GROUP BY ProductID');
    return results;
}

export const getSalesWithProductDetails = async () => {
    const conn = getConnection();
    const [results] = await conn.query('SELECT Sales.SaleID, Products.ProductName, Sales.QuantitySold, Sales.SaleDate FROM Sales INNER JOIN Products ON Sales.ProductID = Products.ProductID');
    return results;
}
