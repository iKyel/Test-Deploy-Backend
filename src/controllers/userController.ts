import { Request, Response } from "express";
import { UserModel } from "../models/UserModel.js";

const getUser = async (req: Request, res: Response) => {
    try {
        const listUsers = await UserModel.find().exec();
        res.send(listUsers);
    } catch (error) {
        console.log(error);
    }
}

export { getUser }