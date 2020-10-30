import { Request, Response } from 'express';
import Route from './route';
import LoginController from '../controllers/login.controller';

class LoginRoutes extends Route {
    private loginController: LoginController = new LoginController();

    constructor() {
        super('/login');
        this.setRoutes();
    }

    protected setRoutes(): void {
        this.router.get('/test', (req: Request, res: Response) => {
            res.status(200).send('you called login path test!');
        });

        this.router.route('/page').get(this.loginController.getLoginPage);
        this.router.route('/').post(this.loginController.login);
    }
}

export default LoginRoutes;
