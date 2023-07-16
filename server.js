const express= require('express');
const path= require('path');
const app= express();
const PORT=3000;

app.use(express.static(path.join(__dirname, 'public')));

console.log(__dirname)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
    
});

app.get('/test',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','gg.html'))
})

app.listen(PORT,()=>{
    console.log(`Server live on PORT : ${PORT}`);
})