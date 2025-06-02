import User from "../models/user_modelos";
import { Request, Response } from "express";

const createUser = async (req: Request, res: Response)=> {
    try{
        const { name, lastName, email } = req.body;
        const newUser = new User({ name, lastName, email });
        await newUser.save();
        res.status(201).json({
            message: "Usuario creado exitosamente",
            data: newUser,
            error: false,
        });
    }catch (error:any) {
        res.status(400).json({
            message: "Error al crear el usuario",
            error: error.message,
        });
    }
};

const getAllUsersActivate = async (req: Request, res: Response) => {
    try {
        const users = await User.find({isActive:true});
        res.status(200).json({
            message: "Usuarios obtenidos exitosamente",
            data: users,
            error: false,
        });
    }catch (error:any) {
        res.status(400).json({
            error: error.message,
        });
    }
};
const getAllUsersDesactivate = async (req: Request, res: Response) => {
    try {
        const users = await User.find({isActive:false});
        res.status(200).json({
            message: "Usuarios obtenidos exitosamente",
            data: users,
            error: false,
        });
    }catch (error:any) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const getUserById = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const user = await User.findById(id);
        if(!user) {
            res.status(404).json({
                message: "Usuario no encontrado",
                error: true,
            });
            return;
        }
        res.status(200).json({
            message: "Usuario encontrado",
            data: user,
            error: false,
        });
    }catch (error: any) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, lastName, email } = req.body;

        const user = await User.findByIdAndUpdate(
            id,
            { name, lastName, email },
            { new: true, runValidators: true }
        );
        if(!user) {
            res.status(404).json({
                message: "Usuario no encontrado",
                error: true,
            });
            return;
        }
        res.status(200).json({
            message: "Usuario actualizado exitosamente",
            data: user,
            error: false,
        });
    }catch (error:any) {
        res.status(400).json({
            error: error.message,
        });
    }
};

const activateUser = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const user = await User.findById(id);

        if(!user) {
            res.status(404).json({
                message: "Usuario no encontrado",
                error: true,
            });
            return;
        }
        if (user.isActive === true) {
            res.status(200).json({
                message: "El usuario ya se encuentra activo",
                data: user,
                error: false,
            });
            return;
        }else{
            const updatedUser = await User.findByIdAndUpdate(id, { isActive: true }, { new: true, runValidators: true });
            res.status(200).json({
                message: "Usuario activado exitosamente",
                data: updatedUser,
                error: false,
            });
            return;
        }
    }catch (error:any) {
        res.status(400).json({
            error: error.message,
        });
    }
};
const desactivateUser = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;
        const user = await User.findById(id);

        if(!user) {
            res.status(404).json({
                message: "Usuario no encontrado",
                error: true,
            });
            return;
        }
        if (user.isActive === false) {
            res.status(200).json({
                message: "El usuario ya se encuentra desactivado",
                data: user,
                error: false,
            });
            return;
        }else{
            const updatedUser = await User.findByIdAndUpdate(id, { isActive: false }, { new: true, runValidators: true });
            res.status(200).json({
                message: "Usuario desactivado exitosamente",
                data: updatedUser,
                error: false,
            });
            return;
        }
    }catch (error:any) {
        res.status(400).json({
            error: error.message,
        });
    }
};

export {
    createUser,
    getAllUsersActivate,
    getAllUsersDesactivate,
    getUserById,
    updateUser,
    activateUser,
    desactivateUser
};