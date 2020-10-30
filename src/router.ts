import Route from './routes/route';
import UserRoutes from './routes/user.routes';
import LoginRoutes from './routes/login.routes';

const router: Array<Route> = [new UserRoutes(), new LoginRoutes()];

export default router;
