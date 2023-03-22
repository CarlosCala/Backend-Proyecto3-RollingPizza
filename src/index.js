import  express  from "express";
import morgan from "morgan";
import cors from "cors";
import './config/database';
import router from "./routes/products.routes";
import auth from './routes/user.routes'

//instancia de express
const app = express();

//crear un puerto
app.set('port', process.env.PORT || 4001);

app.listen(app.get('port'), ()=> {
     console.log("**************");
     console.log("estoy en el puerto " + app.get('port') );
     console.log("**************");
});
//middlewares
app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true }))

app.use(express.static('public'));

//rutas
app.use('/apiPizzas', router );
app.use('/apiPizzas/auth', auth);


// app.get('/', (req,res)=>{
//     res.send('esto es una prueba desde el backend')
// });

// app.delete('/borrar', (req,res)=>{
//     res.send('se borro algo')
// });


