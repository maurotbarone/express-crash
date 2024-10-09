const express= require('express');
const path= require('path');
const port=process.env.PORT||8000

const app=express()

// setup static folder

// app.use(express.static(path.join(__dirname, 'public')));

/* app.get('/',(req,res)=> {
    console.log(req.ip);
    res.sendFile(path.join(__dirname,'public','index.html'))
})

app.get('/about',(req,res)=> {
    res.sendFile(path.join(__dirname,'public','about.html'))
}) */

    // creiamo al volo un database che chiamiamo posts
    let posts= [
        {id:1, title: 'Post One'},
        {id:2, title: 'Post Two'},
        {id:3, title: 'Post Three'},
    ]

    //post è il nostro endpoint
    app.get('/api/posts/:id', (req, res)=>{
        const id = parseInt(req.params.id);
        console.log(id);
        //res.json(posts.filter((post)=> post.id===id));
        
        //posta solo il title in base all'ID
        //res.send(posts[id-1].title)
    
        
    })



app.listen(port, () => console.log(`server is running on port ${port}`))