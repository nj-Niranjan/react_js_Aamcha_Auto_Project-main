const express = require('express');
const mongoose = require('mongoose');
const bookingRoutes = require('.../backend/routes/bookingRoutes');  

const app = express();
app.use(express.json());

 
app.use('/api', bookingRoutes);

 
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('path-to-your-frontend-build-directory'));
}

mongoose.connect('mongodb://localhost:27017/yourDatabaseName', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.log("Error connecting to MongoDB:", error));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
