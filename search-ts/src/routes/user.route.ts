import UserController from "../controllers/user.controller";
import Express, { Router } from "express";

class UserRouter {

    router: Router;

    constructor() {
        this.router = Express.Router();
        const userController = new UserController();
        this.router.get('/search', userController.search);
        this.router.get('/searchName', userController.searchName);
    }

    getRouter() : Router {
        return this.router;
    }
}


export default UserRouter