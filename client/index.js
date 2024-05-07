const express = require('express');
const app = express();
const http = require('http').createServer(app);

const path = require('path');
const io = require('socket.io')(http);
app.use( express.static(path.join(__dirname, '/public')));

const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/chatApplication";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Mongodb connection achieved"))
    .catch((err) => console.log(err));

const MessageSchema = new mongoose.Schema({
    author: String,
    content: String,
    image: String
});

const Message = mongoose.model('Message', MessageSchema);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'chat.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

io.on('connection', (socket) => {
    console.log("Connection achieved");

    Message.find({})
    .then((messages)=>
    {
        socket.emit("loaded messages",messages)
    })
    socket.on('username', (username) => {
        console.log("The Logged in username " + username);
        socket.username = username
        io.emit("user joined",username)
    });

    socket.on('chat message',(msg)=>
    {
        const message = new Message({
            author : msg.author,
            content : msg.content,
            image : msg.image
        })
        message
        .save()
        .then(()=>
        {
            io.emit("chat message",msg)
        })
        .catch((err)=>
            console.log(err)
        )
    })

    socket.on('success',(us)=>
    {
        if (us === "fail") {
            socket.emit("login_failed");
        } else {
            socket.emit("login_success");
        }
    })

    socket.on('disconnect',()=>
    {
        io.emit("user left",socket.username)
    })
});

http.listen(5000, () => {
    console.log("Server is running on 5000");
});
