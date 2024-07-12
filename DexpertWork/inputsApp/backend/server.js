const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'input_form'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database');
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

app.post('/submit', upload.fields([{ name: 'file' }, { name: 'audio' }, { name: 'video' }, { name: 'image' }]), (req, res) => {
  const { text, checkbox, radio, dropdown, color, date, datetime, url, customRange } = req.body;
  const file = req.files.file ? req.files.file[0].filename : null;
  const audio = req.files.audio ? req.files.audio[0].filename : null;
  const video = req.files.video ? req.files.video[0].filename : null;
  const image = req.files.image ? req.files.image[0].filename : null;

  const query = 'INSERT INTO inputs (text, checkbox, radio, dropdown, file, audio, video, color, date, datetime, image, url, customRange) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [text, checkbox, radio, dropdown, file, audio, video, color, date, datetime, image, url, customRange], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send({ message: 'Error inserting data' });
      return;
    }
    res.status(200).send({ message: 'Data inserted successfully' });
  });
});

app.get('/uploads/:filename', (req, res) => {
  const filename = req.params.filename;
  const file = path.join(__dirname, 'uploads', filename);
  res.sendFile(file);
});

app.get('/inputs/:id', (req, res) => {
  const id = req.params.id;

  const query = 'SELECT * FROM inputs WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching data by ID:', err);
      res.status(500).send({ message: 'Error retrieving data' });
      return;
    }

    if (results.length === 0) {
      res.status(404).send({ message: 'No data found for this ID' });
    } else {
      const result = results[0];
      const dataToSend = {
        ...result,
        image: result.image ? `http://localhost:5000/uploads/${result.image}` : null,
        video: result.video ? `http://localhost:5000/uploads/${result.video}` : null,
        audio: result.audio ? `http://localhost:5000/uploads/${result.audio}` : null
      };
      res.status(200).send(dataToSend);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
