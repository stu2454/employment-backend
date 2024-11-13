const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({ origin: 'https://stu2454.github.io/employment-frontend' })); // Updated CORS origin for GitHub Pages
app.use(express.json());

// Log MongoDB URI for troubleshooting (can be removed in production)
console.log("Connecting to MongoDB with URI:", process.env.MONGODB_URI);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Sample test route
app.get('/api/test', (req, res) => res.json({ message: "Connection works!" }));

// Routes
const employmentRoutes = require('./routes/employmentRoutes');
app.use('/api', employmentRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
