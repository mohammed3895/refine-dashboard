import express from "express";
import UserModel from "../models/Users";

const createUser = async (req: express.Request, res: express.Response) => {
    try {
        const { name, email, avatar } = req.body

        const userExist = await UserModel.findOne({ email })
        if(userExist) return res.json(userExist)

        const newUser = await UserModel.create({
            name,
            email,
            avatar
        })
        
        res.status(200).json(newUser)
    } catch (e) {
        res.status(500).json(e)
    }
    
}

const getAllUsers = async (req: express.Request, res: express.Response) => {

    try {
        const result = await UserModel.find()
    } catch (e) {
        res.status(500).json(e)
    }
}

const getUserById = async (req: express.Request, res: express.Response) => {

}

export { getAllUsers, getUserById, createUser }