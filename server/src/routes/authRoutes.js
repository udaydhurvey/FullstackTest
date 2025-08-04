import express from "express"

const router =express.Router();

router.post("/signup",SignUpUser);
router.post("/login", loginUser);

export default router;