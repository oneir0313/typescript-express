import { Router } from 'express';

abstract class Route {
    private path: string;
    protected router = Router();
    protected abstract setRoutes(): void;

    constructor(path = '/api') {
        this.path  = path;
    }

    public getPrefix(): string {
        return this.path;
    }

    public getRouter(): Router {
        return this.router;
    }
}

export default Route;
