const router=require("express").Router();
const userController=require('../controller/user');

router.post("/signup",userController.SignUp);
router.post("/signin",userController.SignIn);

module.exports=router;