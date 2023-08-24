//put all path

import  express  from "express";
import usercontroller from "../controller/usercontraller";

const router=express.Router()
    router.get("/",usercontroller.createUser)

    export default router