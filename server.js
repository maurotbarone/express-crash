const express= require('express');
const path= require('path');
const PORT=process.env.PORT||8000;

const app=express();

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
    ];

// get all posts
app.get('/api/posts',(req,res)=>{
    const limit=parseInt(req.query.limit);

    if(!isNaN(limit)&&limit>0){
       return res.status(200).json(posts.slice(0, limit));
    }
})

    //post è il nostro endpoint
    app.get('/api/posts/:id', (req, res)=>{
        const id = parseInt(req.params.id);
        console.log(id);
        const post=posts.find((post) => post.id ===id)
        //res.status(200).json(posts.filter((post)=> post.id===id);

        if (!post) {
            return res.status(404).json({msg:` post with id of ${id} non esiste!`});

        } 
        res.status(200).json(post)

        //posta solo il title in base all'ID
        //res.send(posts[id-1].title);
    
        
    })



app.listen(PORT, () => console.log(`server is running on port ${PORT}`));