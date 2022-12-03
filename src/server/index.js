import express  from "express";
import path from 'path';

const app = express();
const root = path.join(__dirname, '../../');

app.use('/', express.static(path.join(root, 'dist/client')));
app.use('/uploads', express.static(path.join(root, 'public/uploads')));
app.get('/', (req, res) => {
    res.send(path.join, '/dist/client/index.html');
} );
app.listen(8000, () => console.log('listening on port 8000'));