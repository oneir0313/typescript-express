import { Request, Response } from 'express';
import Route from './route';
import UserController from '../controllers/user.controller';

class UserRoutes extends Route {
    private userController: UserController = new UserController();

    constructor() {
        super();
        this.setRoutes();
    }

    protected setRoutes(): void {
        this.router.get('/test', (req: Request, res: Response) => {
            res.status(200).send('you called user path test!');
        });

        this.router.route('/user').get(this.userController.getAll).post(this.userController.createOne);
        this.router.route('/getUseAge').get(this.userController.getAgeAggregation);
        this.router.route('/user/:id').get(this.userController.getOne).put(this.userController.updateOne).delete(this.userController.deleteOne);
    }
}

export default UserRoutes;
