const express = require('express');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/task-route');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/tasks', taskRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;