import { Express, Request, Response } from "express";
import userRepository from "../repositories/user.repository";

class UserController {

    constructor() {
        console.log("initializing the user controller class")
    }    

    searchName = (req: Request, res: Response) : void => {
        const search = req.query.search
        console.log(`Search for ${search}`);

        userRepository.searchName(search as string).then(users => {
            res.setHeader('Content-Type', 'application/json');
            res.json(users);
        }).catch(err => {
            console.error(err);
            res.status(500).json({"msg": "Something went wrong."})
        });
    }

    search = (req: Request, res: Response) : void => {
        const search = req.query.search
        console.log(`Search for ${search}`);

        userRepository.search(search as string).then(users => {
            res.setHeader('Content-Type', 'application/json');
            res.json(users);
        }).catch(err => {
            console.error(err);
            res.status(500).json({"msg": "Something went wrong."})
        });
    }
}

export default UserController