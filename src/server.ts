import app from './app';
// import config from './config/dbConfig';
// import { createConnection } from 'typeorm';

async function boostrap() {
    const PORT = process.env.EXPOSE_PORT || 3000;
    // await createConnection(config);
    app.listen(PORT, () => {
        console.log('Express server listening on Port ', PORT);
    });
};

boostrap();