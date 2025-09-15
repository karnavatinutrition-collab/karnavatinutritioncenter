const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // serve your HTML/CSS/JS

// API endpoint to save data
app.post('/api/contact', (req, res) => {
  const dataFile = path.join(__dirname, 'submissions.json');
  const entry = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
    time: new Date().toISOString()
  };

  // read old data
  let submissions = [];
  if (fs.existsSync(dataFile)) {
    submissions = JSON.parse(fs.readFileSync(dataFile));
  }
  submissions.push(entry);
  fs.writeFileSync(dataFile, JSON.stringify(submissions, null, 2));

  res.json({ success: true });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
