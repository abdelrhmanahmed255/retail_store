import { getConnection } from "../../database/connection.js";

export const createStoreManager = async () => {
    const conn = getConnection();
    
    try {
        await conn.query(`DROP USER IF EXISTS 'store_manager'@'localhost'`);
    } catch (error) {}
    
    await conn.query(`CREATE USER 'store_manager'@'localhost' IDENTIFIED BY 'password123'`);
    
    await conn.query(`GRANT SELECT, INSERT, UPDATE ON retail_store.* TO 'store_manager'@'localhost'`);
    
    await conn.query(`FLUSH PRIVILEGES`);
    
    return { message: 'Store manager created successfully' };
}
