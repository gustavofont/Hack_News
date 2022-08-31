const express = require('express')
//const { REPL_MODE_SLOPPY } = require(rep1)
const router = express.Router()
const ModelThread = require('../database/models/threadModel')
const ModelReply = require('../database/models/replyModel')

router.get('/thread', (req,res)=>{
    res.render('postThread')
})

router.post('/thread/save',(req,res)=>{
    let title = req.body.title 
    let description = req.body.description
    let author = req.body.author
    
    ModelThread.create({
        title: title,
        description: description,
        author : author
    }).then(()=>{
        res.redirect("/")
    })
})

router.get('/thread/:id',(req,res) =>{
    let id = req.params.id;
    ModelThread.findOne({
        where: {id: id}
    }).then(thread => {
        if(thread != undefined){

            ModelReply.findAll({where: {threadId: thread.id}}).then(replies =>{
                res.render('thread',{thread : thread, replies: replies})
            })
        }else{
            res.render('notFound')
        }
    })
})

router.post('/reply/save',(req,res)=>{
    let authorR = req.body.author 
    let bodyR = req.body.reply
    let threadId = req.body.threadId
    
    ModelReply.create({
        author: authorR,
        body: bodyR,
        threadId : threadId
    }).then(()=>{
        res.redirect("/thread/"+threadId)
    })
})



module.exports = router