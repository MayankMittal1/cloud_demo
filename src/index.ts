import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.get('/', (req, res) => {
  res.send('Cloud Run is working!');
})

app.listen(4000, () => {
  console.log(`server running on port 4000`);
});