const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (adjust if needed)
app.use(express.static(__dirname));

// GET: serve homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// POST: handle form submission
app.post('/submit-form', (req, res) => {
  const formData = req.body;
  console.log('Form submitted:', formData);
  
  // Optionally send a response
  res.send('Form received! Thank you.');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
