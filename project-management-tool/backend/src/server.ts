import Express from "express";
import { router } from "./routes";

const server = Express();

server.use(Express.json());
server.use(router);

export { server };
