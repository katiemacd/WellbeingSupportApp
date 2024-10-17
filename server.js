const express = require('express');
const cors = require('cors'); // Don't forget to install this package with npm install cors
const Pusher = require('pusher');

const app = express();

// Initialize Pusher
const pusher = new Pusher({
    appId: '1773219',
    key: '0f02931764008439a32c',
    secret: '9cfda15b3e2d99679bbb',
    cluster: 'eu',
});

app.use(cors()); // Use cors middleware

// Middleware to parse JSON requests
app.use(express.json());

app.post('/messages', (req, res) => {
    const { message, email } = req.body; // Destructure to get both message and email
    // Trigger an event on the 'messages-channel' Pusher channel, including both message and email
    pusher.trigger('messages-channel', 'new-message', { message, email });
    console.log(`Received message: ${message} from ${email}`);
    res.status(200).send('Message received');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

