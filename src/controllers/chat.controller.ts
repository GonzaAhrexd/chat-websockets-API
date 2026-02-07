import { Socket } from 'socket.io';


const generateColor = (username: string) => {
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
        hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }
    const red = (hash >> 0) & 255;
    const green = (hash >> 8) & 255;
    const blue = (hash >> 16) & 255;
    const toHex = (num: number) => num.toString(16).padStart(2, '0');

    console.log(`#${toHex(red)}${toHex(green)}${toHex(blue)}`)
    return `#${toHex(red)}${toHex(green)}${toHex(blue)}`;
}

export const handleMessage = (socket: Socket, msg: any) => {
    socket.broadcast.emit('message', {
        body: msg.body,
        from: {
            id: socket.id,
            username: msg.from.username, 
            color: generateColor(msg.from.username)
        },
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