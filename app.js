const express = require('express');
require('dotenv').config();
const app = express();
const userRoutes = require('./routes/userRoutes');
const { apiResponse } = require('./middleware/responseMiddleware');

app.use(express.json());
app.use(apiResponse);  

app.use('/api/v1/users', userRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
