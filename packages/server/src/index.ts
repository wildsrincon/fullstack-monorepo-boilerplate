/* eslint-disable prettier/prettier */
import app from './server/app';
require('dotenv').config()

const port = process.env.PORT || 5000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`);
});
