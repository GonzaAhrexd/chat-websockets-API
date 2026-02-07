// Node.js essential modules
import express from 'express';
import http from 'http';
import dotenv from 'dotenv' // Environment variable module
import { Server as SocketServer } from 'socket.io' // Socket.IO for real-time communication
import { chatRoutes } from './routes/chat.routes';
// Configurations

// Routes
// import pingRoutes from './routes/chat.routes' // Chat routes

dotenv.config(); // Load environment variables from .env file

// Start Express application
const app: express.Application = express();
const server = http.createServer(app);
const io = new SocketServer(server);

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    chatRoutes(socket);
})


// Start the server
const port = process.env.PORT || 3000; // Server port from environment variables or default to 3000

server.listen(port, () => {
    console.log(`Server is running on port ${port} 🚀`);
}).on('error', (error: Error) => {
    console.error('Error starting the server:', error);
});