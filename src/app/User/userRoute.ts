import {Application} from "express";
import * as user from './userController';
import jwtMiddleware from "../../../config/jwtMiddleware";
const UserRoute = function(app:Application){
    
    // 테스트 API
    app.get('/app/test', user.getTest);

};

export default UserRoute;
