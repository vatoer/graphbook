import express  from "express";

const app = express();

app.get('*', (req, res) => res.send('hello wewew') );
app.listen(8000, () => console.log('listening on port 8000'));