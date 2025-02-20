import Express from "express";
import { router } from "./routes";
import cors from "cors";

const server = Express();

server.use(cors());

server.use(Express.json());
server.use(router);

export { server };
