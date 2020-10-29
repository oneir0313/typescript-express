import { Router } from 'express';

abstract class Route {
    private path = '/api';
    protected router = Router();
    protected abstract setRoutes(): void;

    public getPrefix(): string {
        return this.path;
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default Route;
