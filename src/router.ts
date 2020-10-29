import Route from "./routes/route";
import UserRoutes from "./routes/user.routes";

const router: Array<Route> = [
  new UserRoutes(),
];

export default router;