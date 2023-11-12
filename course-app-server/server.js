const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const likes = {};
const dislikes = {};

app.get('/likes', (req, res) => {
  res.json(likes);
});

app.get('/dislikes', (req, res) => {
  res.json(dislikes);
});

app.post('/like/:id', (req, res) => {
  const courseId = req.params.id;
  if (!likes[courseId]) {
    likes[courseId] = 1;
  } else {
    likes[courseId]++;
  }
  res.status(200).send('Liked');
});

app.post('/dislike/:id', (req, res) => {
  const courseId = req.params.id;
  if (!dislikes[courseId]) {
    dislikes[courseId] = 1;
  } else {
    dislikes[courseId]++;
  }
  res.status(200).send('Disliked');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
