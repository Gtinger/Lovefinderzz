const { Router } = require('express')
const express = require('express')
const controller = express.Router()

controller.get('/', (req, res) => {
    res.render('index')
})

module.exports = controller;