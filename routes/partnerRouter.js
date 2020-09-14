const express = require('express');
const bodyParser = require('body-parser');
const partnerRouter = require('./partnerRouter');

const partnerRouter = express.Router();

partnerRouter.use(bodyParser.json());

partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('partner get request');
})
.post((req, res) => {
    res.end(`partner end request`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partner');
})
.delete((req, res) => {
    res.end('Deleting all partners');
});

partnerRouter.route('/:partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('partnerId get request');
})
.post((req, res) => {
    res.end(`partnerId end request`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partnerId');
})
.delete((req, res) => {
    res.end('Deleting all partnerIds');
});

module.exports = partnerRouter