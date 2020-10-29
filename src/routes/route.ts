import { Router } from 'express';

abstract class Route {
    private path = '/api';
    protected router = Router();
    protected abstract setRoutes(): void;

    public getPrefix() {
        return this.path;
    }

    public getRouter() {
        return this.router;
    }
}

export default Route;
