const express = require('express')
//const { REPL_MODE_SLOPPY } = require(rep1)
const router = express.Router()
const ModelThread = require('../database/models/ThreadModel')

router.get('/home', (req,res)=>{

    ModelThread.findAll({ raw : true , order: [['id', 'DESC']] }).then(threads=>{
        res.render('home', {threads : threads})
    })
})
module.exports = router