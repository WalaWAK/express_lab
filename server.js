const express = require('express')
const app = express()
const port = 3000

app.listen(port, function () {
    console.log("listening")
})


app.get('/', (req, res) => res.send('<h1>Alphabet Pages</h1>'));
app.get('/A/', (req, res) => {res.send('<h1>A words</h1>'));
app.get('/B/', (req, res) => {res.send('<h1>B words</h1>'));
app.get('/C/', (req, res) => {res.send('<h1>C words</h1>'));
app.get('/D/', (req, res) => {res.send('<h1>D words</h1>'));
app.get('/E/', (req, res) => {res.send('<h1>E words</h1>'));
app.get('/F/', (req, res) => {res.send('<h1>F words</h1>'));
app.get('/G/', (req, res) => {res.send('<h1>G words</h1>'));
app.get('/H/', (req, res) => {res.send('<h1>H words</h1>'));
app.get('/I/', (req, res) => {res.send('<h1>I words</h1>'));
app.get('/J/', (req, res) => {res.send('<h1>J words</h1>'));
