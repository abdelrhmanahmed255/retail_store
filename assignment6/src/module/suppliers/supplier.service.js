import { getConnection } from "../../database/connection.js";

export const getAllSuppliers = async () => {
    const conn = getConnection();
    const [suppliers] = await conn.query('SELECT * FROM Suppliers');
    return suppliers;
}

export const getSupplierById = async (id) => {
    const conn = getConnection();
    const [supplier] = await conn.query('SELECT * FROM Suppliers WHERE SupplierID = ?', [id]);
    return supplier[0];
}

export const addSupplier = async (supplierName, contactNumber) => {
    const conn = getConnection();
    const [result] = await conn.query('INSERT INTO Suppliers (SupplierName, ContactNumber) VALUES (?, ?)', [supplierName, contactNumber]);
    return result;
}

export const getSuppliersStartingWithF = async () => {
    const conn = getConnection();
    const [suppliers] = await conn.query('SELECT * FROM Suppliers WHERE SupplierName LIKE ?', ['F%']);
    return suppliers;
}
