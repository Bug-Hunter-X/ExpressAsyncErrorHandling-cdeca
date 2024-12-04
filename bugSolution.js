const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        res.send('Hello World!');
      } else {
        throw new Error('Something went wrong!');
      }
    } catch (error) {
      console.error('Error:', error.message); // Log the error
      res.status(500).send('Internal Server Error'); // Send an error response
    }
  }, 1000);
});
app.listen(3000, () => console.log('Server listening on port 3000'));