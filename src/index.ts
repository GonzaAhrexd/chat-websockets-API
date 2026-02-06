// Node.js essential modules
import express from 'express';
import http from 'http';
import morgan from 'morgan' // HTTP request logger middleware
import cors from 'cors' // CORS module
import dotenv from 'dotenv' // Environment variable module
import { Server as SocketServer } from 'socket.io' // Socket.IO for real-time communication
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

    socket.on('message', (msg) => {
        console.log(msg)
        socket.broadcast.emit('message', {
            body: msg,
            from: socket.id.slice(6)
        
        })
    })
    socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
    }
    );
})

// Connect to the database

// Set up middlewares
// app.use(cors(corsOptions)); // Apply CORS middleware with options
// app.use(morgan('dev')); // Use morgan for logging HTTP requests
// app.use(express.json({ limit: '10mb' }));
// app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Define routes
// app.use('/api/ping', pingRoutes)

// Start the server
const port = process.env.PORT || 3000; // Server port from environment variables or default to 3000

server.listen(port, () => {
    console.log(`Server is running on port ${port} 🚀`);
}).on('error', (error: Error) => {
    console.error('Error starting the server:', error);
});