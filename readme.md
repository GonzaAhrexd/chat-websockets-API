# Chat API - WebSocket Learning Project

A simple real-time chat API built with **Node.js**, **Express**, and **Socket.IO**. This project was created as a learning exercise to understand how WebSockets work and how to implement real-time communication between clients.

## About

This API serves as the backend for a real-time chat application. It handles:

- **Real-time messaging**: Messages are instantly broadcasted to all connected users
- **Typing indicators**: Users can see when someone is typing
- **Connection management**: Handles user connections and disconnections

## Tech Stack

- Node.js
- Express 5
- Socket.IO
- TypeScript

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd chat-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `example.env`:
   ```bash
   cp example.env .env
   ```

4. Configure your environment variables in `.env`:
   ```env
   PORT=3000
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

The server will start on `http://localhost:3000` (or your configured port).

## WebSocket Events

| Event     | Description                          |
|-----------|--------------------------------------|
| `message` | Send/receive chat messages           |
| `typing`  | Notify when a user is typing         |


