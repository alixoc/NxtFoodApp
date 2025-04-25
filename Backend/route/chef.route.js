import e from "express";
import { getChef } from "../controller/chef.controller.js";


const router=e.Router()

router.get("/",getChef) //get api

export default router