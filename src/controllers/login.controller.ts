import { Request, Response } from 'express';
import { getUserInfo } from '../repositories/user.repo';

class LoginController {
    public getLoginPage(req: Request, res: Response): void{
        return res.render('login', {
                title: 'Login'
              });
    }
    public async login(req: Request, res: Response): Promise<Response<any>>{
        const user = await getUserInfo(req.body.name as string);
        if (user.password === req.body.password) {
            return res.send('<p>Login success!</p>');
        }
        return res.status(401).send('<p>Login fail!</p>');
    }
}

export default LoginController;
