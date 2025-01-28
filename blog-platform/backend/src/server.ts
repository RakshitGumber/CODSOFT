import Express from "express";
import { router } from "./router";

const server = Express();

server.use(Express.json());
server.use(router);

export { server };
