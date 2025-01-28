import { Router } from "express";
import { api } from "./api";
import root_route from "./root_route";

const router = Router();

router.use("/", root_route);
router.use("/api", api);

export { router };
