import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type: 'mysql',
    host: process.env.MYSQL_IP,
    port: Number(process.env.MYSQL_PORT),
    username: process.env.MYSQL_USERNAME, // 設定寫在.env
    password: process.env.MYSQL_PASSWORD, // 設定寫在.env
    database: process.env.MYSQL_DB, // 設定寫在.env
    entities: [__dirname + '/../entities/*.{ts,js}'],
    synchronize: true,
    logging: true,
};

export default config;
