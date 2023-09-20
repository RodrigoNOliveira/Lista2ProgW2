const express = require('express');
const app = express();
const port = 3000;
const bbt = require('./bd_bbt');
const sn = require('./bd_sn')
const st = require('./bd_st')

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/bbt', (req, res) =>{
    res.render('index', bbt);
});
app.get('/sn', (req, res) =>{
    res.render('index', sn);
});
app.get('/st', (req, res) =>{
    res.render('index', st);
});
app.get('/', (req, res) =>{
    res.render('index', bbt);
});


app.listen(port, ()=>{
    console.log(`O server está rodando na porta ${port}`);
});



