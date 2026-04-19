import { getConnection } from "./connection.js";

export const createTables = async () => {
    const conn = getConnection();

    await conn.query(`
        CREATE TABLE IF NOT EXISTS Suppliers (
            SupplierID INT PRIMARY KEY AUTO_INCREMENT,
            SupplierName TEXT,
            ContactNumber TEXT
        )
    `);

    await conn.query(`
        CREATE TABLE IF NOT EXISTS Products (
            ProductID INT PRIMARY KEY AUTO_INCREMENT,
            ProductName TEXT,
            Price DECIMAL(10, 2),
            StockQuantity INT,
            SupplierID INT,
            FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)
        )
    `);

    await conn.query(`
        CREATE TABLE IF NOT EXISTS Sales (
            SaleID INT PRIMARY KEY AUTO_INCREMENT,
            ProductID INT,
            QuantitySold INT,
            SaleDate DATE,
            FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
        )
    `);

    console.log('Tables created successfully');
}

export const alterTables = async () => {
    const conn = getConnection();

    try {
        await conn.query(`ALTER TABLE Products ADD COLUMN Category TEXT`);
        console.log('Category column added');
    } catch (error) {}

    try {
        await conn.query(`ALTER TABLE Products DROP COLUMN Category`);
        console.log('Category column dropped');
    } catch (error) {}

    try {
        await conn.query(`ALTER TABLE Suppliers MODIFY ContactNumber VARCHAR(15)`);
        console.log('ContactNumber modified to VARCHAR(15)');
    } catch (error) {}

    try {
        await conn.query(`ALTER TABLE Products MODIFY ProductName TEXT NOT NULL`);
        console.log('ProductName set to NOT NULL');
    } catch (error) {}
}

export const insertInitialData = async () => {
    const conn = getConnection();

    const [suppliers] = await conn.query(`SELECT * FROM Suppliers WHERE SupplierName = 'FreshFoods'`);
    
    if (suppliers.length === 0) {
        await conn.query(`INSERT INTO Suppliers (SupplierName, ContactNumber) VALUES ('FreshFoods', '01001234567')`);
        console.log('Supplier inserted: FreshFoods');

        const [result] = await conn.query(`SELECT SupplierID FROM Suppliers WHERE SupplierName = 'FreshFoods'`);
        const supplierID = result[0].SupplierID;

        await conn.query(`INSERT INTO Products (ProductName, Price, StockQuantity, SupplierID) VALUES ('Milk', 15.00, 50, ?), ('Bread', 10.00, 30, ?), ('Eggs', 20.00, 40, ?)`, [supplierID, supplierID, supplierID]);
        console.log('Products inserted: Milk, Bread, Eggs');

        const [milkResult] = await conn.query(`SELECT ProductID FROM Products WHERE ProductName = 'Milk'`);
        const milkID = milkResult[0].ProductID;

        await conn.query(`INSERT INTO Sales (ProductID, QuantitySold, SaleDate) VALUES (?, 2, '2025-05-20')`, [milkID]);
        console.log('Sale inserted: 2 units of Milk');

        await conn.query(`UPDATE Products SET Price = 25.00 WHERE ProductName = 'Bread'`);
        console.log('Bread price updated to 25.00');

        await conn.query(`DELETE FROM Products WHERE ProductName = 'Eggs'`);
        console.log('Eggs product deleted');
    }
}

export const setupDatabase = async () => {
    await createTables();
    await alterTables();
    await insertInitialData();
    console.log('Database setup completed');
}
