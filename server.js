const express=require('express')

require('dotenv').config()

const app=express()
const port= process.env.PORT||5000

app.get('/',(req,res)=>res.send('Hello World! we are doing CRUD operation on BOOK'))

const books=[{
    id:1,
    title:'NodeJs with 51',
    author:'Wisdom sprouts',
    price:340000,
    gen:'V1.1'
}]

app.get('/getAllBooks',(req,res)=>{
    res.status(200).send({books:books})
})

app.get('/getBookById:ID',(req,res)=>{
    console.log(req.params.ID)
    const ID=req.params.ID;
    const index=books.findIndex((b)=>b.id==ID)

if(index == -1){
    res.status(400).send({msg:"book not found",success:false})
}else{
    const book=books.find((b)=>b.id==ID)
    res.status(200).send({book:book,status:true})
}

})

app.post('/createBook',(req,res)=>{
    console.log(req.body)
    newbook={
        id:Date.now(),
        title:req.body.title,
        author:req.body.author,
        price:req.body.price,
        gen:req.body.gen
    }
    books.push(newBook)
    res.status(200).send({msg:"Book added Successfully"})
    
})

app.delete('/deleteBook/:ID',(req,res)=>{
    const ID=req.params.ID

})

app.listen(port,()=>console.log(`Example app listening on port ${port}!`))

//http://localhost:5000/