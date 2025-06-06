import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';
import "./controllers/socket.controllers.js"; 

dotenv.config({
    path: './.env',
});

const port = parseInt(process.env.PORT || '8080');

connectDB()
    .then(() => {
        app.listen(port, () => {
            console.log('------------------------------------------------');
            console.log(`🚀 Server started successfully on port: ${port}`);
            console.log(`🔗 URL: http://localhost:${port}`);
            console.log(`✅ Database connected successfully`);
            // console.log('------------------------------------------------');
            // console.log('📝 API Documentation available at /api/docs');
            console.log('⌛ Server is waiting for requests...');
            console.log('------------------------------------------------');
        });
    })
    .catch((err) => {
        console.error('❌ MONGO DB connection failed!!!', err);
        process.exit(1);
    });