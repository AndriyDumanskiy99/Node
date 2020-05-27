const express = require('express')

const router = require('./routes')

const app = express();

app.use(express.json());
app.use(express.urlencoded());



app.use(router);





// app.get('/users',(req, res)=>{
//     res.json('Get users')
// })
// app.delete('/users/:userId',(req , res ) =>{
//     const params = req.params
//     const query = req.query
//     res.json({params , query})
// })






app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listen 5000...');
    }
})