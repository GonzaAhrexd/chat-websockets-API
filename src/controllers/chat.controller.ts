import { Socket } from 'socket.io';

export const handleMessage = (socket: Socket, msg: any) => {
    socket.broadcast.emit('message', {
        body: msg.body,
        from: msg.from,
        time: msg.time
    });
};

export const handleDisconnect = (socket: Socket) => {
    console.log('User disconnected:', socket.id);
};

export const handleTyping = (socket: Socket, data: any) => {
    socket.broadcast.emit('typing', {
        user: data.user,
        isTyping: true
    });
};