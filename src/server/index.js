import express  from "express";

const app = express();

app.get('/', function (req, res, next){
    console.log('1st function');
    next();
}, function (req, res) {
    console.log('2nd function');
    res.send('hellooo');
} );
app.listen(8000, () => console.log('listening on port 8000'));