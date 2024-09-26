const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jim' },
    { id: 4, name: 'Jill' },
];

app.get('/users', (req,res) => {
    res.status(404).json(users);
});

app.post('/users', (req,res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})