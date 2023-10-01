import { Request, Response } from "express";
import Users from "./user.model";



export default class UserController {
    
  public findAll = async (req: Request, res: Response): Promise<any> => {
    try {
      const getAllUsers = await Users.find({});
      res.status(200).send({
        success: true,
        data: getAllUsers
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };

  public create  = async (req: Request, res: Response): Promise<any> => {
    try {

        const {firstName,lastName,email} =  req.body
        const createUser = new Users({ firstName,lastName,email});        
        res.status(200).send({
            success: true,
            data: await createUser.save()
        });

    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };


  public update  = async (req: Request, res: Response): Promise<any> => {
    try {
    
     const {_id,firstName,lastName,email} =  req.body
      const update = Users.findOneAndUpdate({_id},{ firstName,lastName,email})  
      res.status(200).send({
        success: true,
        data: update
      });
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.toString(),
        data: null
      });
    }
  };


}
