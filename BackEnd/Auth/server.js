
import app from './app.js';  // to use app
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000; // As deflate  if the variable does not exist in the environment file
const ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, () => {
  console.log(`Server running in ${ENV} mode on port ${PORT}`); // Connection to the server
});