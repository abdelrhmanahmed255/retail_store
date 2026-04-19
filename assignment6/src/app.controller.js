import express from "express";
import { databaseConnection } from "./database/connection.js";
import { setupDatabase } from "./database/database.service.js";
import productRouter from "./module/products/product.controller.js";
import supplierRouter from "./module/suppliers/supplier.controller.js";
import saleRouter from "./module/sales/sale.controller.js";
import userRouter from "./module/users/user.controller.js";

export const bootstrap = async () => {
    try {
        await databaseConnection();
        await setupDatabase();

        const app = express();

        app.use(express.json());

        app.use(productRouter);
        app.use(supplierRouter);
        app.use(saleRouter);
        app.use(userRouter);

        app.listen(3000, () => {
            console.log("Server is running on http://localhost:3000");
        });
    } catch (error) {
        console.log('Error starting application:', error.message);
        console.log('\nMake sure you created the database first:');
        console.log('CREATE DATABASE retail_store;');
    }
}
