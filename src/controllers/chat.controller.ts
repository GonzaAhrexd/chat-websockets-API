import { Socket } from 'socket.io';

export const handleMessage = (socket: Socket, msg: any) => {
    console.log('Message received:', msg);
    socket.broadcast.emit('message', {
        body: msg.body,
        from: msg.from
    });
};

export const handleDisconnect = (socket: Socket) => {
    console.log('User disconnected:', socket.id);
};

export const handleTyping = (socket: Socket, data: any) => {
    console.log("Here")
    socket.broadcast.emit('typing', {
        user: data.user,
        isTyping: true
    });
};