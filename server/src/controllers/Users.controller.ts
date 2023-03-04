import express from "express";
import UserModel from "../models/Users";

const createUser = async (req: express.Request, res: express.Response) => {
    const { name, email, avatar } = req.body
    try {
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
    const { id } = req.params
    try {
        const user = await UserModel.findOne({ id })
        if(user) {
            res.status(200).json(user)
        } else {
            res.status(500).json({ message: "User not Found"})
        }

    } catch (e) {
        res.json(e)
    }
}

export { getAllUsers, getUserById, createUser }