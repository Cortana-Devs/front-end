const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5010;
app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database(':memory:');
db.serialize(() => {
  db.run("CREATE TABLE users (name TEXT, email TEXT, academicLevel TEXT)");
});

const gptRoutes = require('./routes/gptRoutes');
app.use('/api', gptRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception thrown:', err);
  process.exit(1);
});