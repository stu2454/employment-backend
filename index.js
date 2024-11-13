const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Import cors
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));  // Allow only requests from localhost:3000
app.use(express.json());

console.log("Connecting to MongoDB with URI:", process.env.MONGODB_URI);
// MongoDB connection and other routes
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Sample route
app.get('/api/test', (req, res) => res.json({ message: "Connection works!" }));

// Routes
const employmentRoutes = require('./routes/employmentRoutes');
app.use('/api', employmentRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

