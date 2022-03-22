import express,{Application} from "express";
import compression from 'compression';
import cors from 'cors';
import methodOverride from 'method-override';
import Logger from './logger';
import UserRoute from "../src/app/User/userRoute";

const App = function ():Application{
  const app: Application = express();

  app.use(compression());

  app.use(express.json());

  app.use(express.urlencoded({extended: true}));

  app.use(methodOverride());

  app.use(cors());
 
  UserRoute(app);

  return app;
};

export default App;
