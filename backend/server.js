
// Temel express server oluşturmak için öncelikle express paketini aşağıdaki gibi çağarıyoruz...
const express = require("express");

// kök dizinde ki .env dosyasına ulaşıp dotenv değişkenimize port değerimizi atıyor.
const dotenv = require('dotenv').config()

// hata yakalama fonksyonumuz
const {errorCatching} = require('./middlewares/errorMiddleware')

 
const PORT = process.env.PORT
const connection = require('./config/db')
const colors = require('colors')
const cors = require('cors')
const app = express();

const serverFunc = () =>
{
    console.log('Bu web app '.magenta.italic + PORT.magenta.italic + ' portu üzerinden yayında'.magenta.italic);
}

 
app.use(express.urlencoded({extended:true})); 
app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use('/api/contacts', require('./routes/contactRoute'));  
app.use('/api/users', require('./routes/userRoute')); 
app.use(errorCatching)


// call db connection
connection();

// listen server
app.listen(PORT, serverFunc);


// http://localhost:8080