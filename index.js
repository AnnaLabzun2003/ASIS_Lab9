var connection = require('./config/config.bd');
const express=require('express');
const bodyParser = require('body-parser');


const PORT = 5000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.use(bodyParser.json());
app.set("view engine", "hbs");


app.get('/', (req, res)=> {
   // res.status(200).json("Сервер працює123");
   res.render('index.ejs');
});


app.listen(PORT, () => console.log("SERVER START!!!"));

const departmentRoutes = require ('./router/department.routers'); 
app.use('/api/department', departmentRoutes);

const guideRoutes = require ('./router/guide.routers.js'); 
app.use('/api/guide', guideRoutes);

const landmarkRoutes = require ('./router/landmark.routers.js'); 
app.use('/api/landmark', landmarkRoutes);

app.use(express.static("."));





