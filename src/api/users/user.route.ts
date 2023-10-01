import { Router } from "express";
import usersController from "./user.controller";

const users: Router = Router();
const controller = new usersController();

// Retrieve all Users
users.get("/", controller.findAll);

// Create a new user
users.post("/", controller.create);


// update user
users.put("/", controller.update);


export default users;
