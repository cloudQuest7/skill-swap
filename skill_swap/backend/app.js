app.use('/uploads', express.static('backend/uploads'));
app.use('/api/users', userRoutes);
const userRoutes = require('./routes/user');

