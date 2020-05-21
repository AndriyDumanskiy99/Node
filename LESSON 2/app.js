const express = require('express')
const exprsBars = require('express-handlebars')
const path = require('path')

const app = express();

app.use(express.json());
app.use(express.urlencoded());

express.static(path.join(__dirname,'views'));

app.engine('.hbs',exprsBars({
    defaultLayout: false,
    extname: '.hbs'
}))

app.set('view engine','.hbs');
app.set('views', path.join(__dirname,'views'))

const arrUsers = [{
    name: "Andriy",
    login: "fbasfbaf@gmail.com",
    password: 'wffsaf2232'
},{
    name: "Victor",
    login: "blablabla@gmail.com",
    password: 'fff244'
}]



app.get('/users',(req , res )=>{
    res.render('arrUsers',{arrUsers})
})

app.get('/register',(req , res )=>{
    res.render('register')
})

app.post('/reg',(req , res)=>{
    arrUsers.push(req.body)
    res.end()
//console.log(arrUsers)
})


app.get('/login',(req, res)=>{
    res.render('login')
})
app.post('/log',(req , res)=>{

    if(arrUsers.find(el => el.login = req.body.login)){
        console.log('laskavo prosumo')
    }else {
        console.log('please again')
    }
})


app.listen(5000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Listen 5000...');
    }
})