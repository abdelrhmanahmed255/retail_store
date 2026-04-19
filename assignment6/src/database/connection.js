import mysql from 'mysql2/promise';

let connection;

export const databaseConnection = async () => {
    connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'retail_store'
    });
    console.log('Database connected successfully');
}

export const getConnection = () => {
    return connection;
}
