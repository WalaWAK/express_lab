const express = require('express')
const app = express()
const port = 3000

app.listen(port, function () {
    console.log("listening")
})

const A_words = require('./dictionary/A_words');
const B_words = require('./dictionary/B_words');
const C_words = require('./dictionary/C_words');
const D_words = require('./dictionary/D_words');
const E_words = require('./dictionary/E_words');
const F_words = require('./dictionary/F_words');
const G_words = require('./dictionary/G_words');
const H_words = require('./dictionary/H_words');
const I_words = require('./dictionary/I_words');
const J_words = require('./dictionary/J_words');

app.get('/', (req, res) => res.send('<h1>Alphabet Pages</h1>'));
app.get('/A/', (req, res) => {res.send(A_words)});
app.get('/B/', (req, res) => {res.send(B_words)});
app.get('/C/', (req, res) => {res.send(C_words)});
app.get('/D/', (req, res) => {res.send(D_words)});
app.get('/E/', (req, res) => {res.send(E_words)});
app.get('/F/', (req, res) => {res.send(F_words)});
app.get('/G/', (req, res) => {res.send(G_words)});
app.get('/H/', (req, res) => {res.send(H_words)});
app.get('/I/', (req, res) => {res.send(I_words)});
app.get('/J/', (req, res) => {res.send(J_words)});
