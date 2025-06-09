const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/portfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Resume schema
const ResumeSchema = new mongoose.Schema({
  filename: String,
  filetype: String,
  file: Buffer
});
const Resume = mongoose.model('Resume', ResumeSchema, 'resumes');

// Download route
app.get('/download-resume', async (req, res) => {
  try {
    const resume = await Resume.findOne();
    if (!resume) return res.status(404).send('Resume not found');

    res.set({
      'Content-Type': resume.filetype,
      'Content-Disposition': `attachment; filename="${resume.filename}"`
    });
    res.send(resume.file);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
