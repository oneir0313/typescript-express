import { Request, Response } from 'express';
import { getUsers, createUser, getUser, updateUser, deleteUser } from '../repositories/user.repo';
import { User } from '../entities/user.entity';

class UserController {
    public getAll(req: Request, res: Response): void{
       getUsers().then((result: any) => {
            return res.status(200).json(result);
        });
    }

    public createOne(req: Request, res: Response): void {
        const data: User = req.body;
        createUser(data).then(result => {
            return res.status(200).json(result);
        });
    }

    public getOne(req: Request, res: Response): void {
        const id = req.params.id;
        getUser(id).then(result => {
            if (result) return res.status(200).json(result);
            else return res.status(404).json({ msg: 'error' });
        });
    }

    public updateOne(req: Request, res: Response): void {
        const id = req.params.id;
        const data: User = req.body;
        updateUser(id, data).then(result => {
            if (result) return res.status(200).json(result);
            else return res.status(404).json({ msg: 'error' });
        });
    }

    public deleteOne(req: Request, res: Response): void {
        const id = req.params.id;
        deleteUser(id).then(result => {
            if (result) return res.status(200).json({ msg: 'success' });
            else return res.status(404).json({ msg: 'error' });
        });
    }
}

export default UserController;
