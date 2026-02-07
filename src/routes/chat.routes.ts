import { Socket } from 'socket.io';
import { handleMessage, handleDisconnect, handleTyping } from '../controllers/chat.controller';

export const chatRoutes = (socket: Socket) => {
    socket.on('message', (msg) => handleMessage(socket, msg));
    
    socket.on('typing', (data) => handleTyping(socket, data));
    
    socket.on('disconnect', () => handleDisconnect(socket));
};