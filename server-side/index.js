const express =require('express');
const app = express();
const cors =require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const user =[
    {id:1,name:"imran",email:"Imran@gmail.com"},
    {id:1,name:"imran",email:"Imran@gmail.com"},
    {id:1,name:"imran",email:"Imran@gmail.com"}
]

app.get('/',(req,res)=>{
    res.send("Hello From Node Js")
})
app.get('/user',(req,res)=>{
    res.send(user);
})

app.listen(port,()=>{
    console.log(`server Is Running: ${port}`)
})