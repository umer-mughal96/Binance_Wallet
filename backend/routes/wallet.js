const express = require("express");
const router = express.Router();
const {
    getBalance, userLogin, userGoogleLogin, status, logout,
} = require("../controllers/wallet");
const { authenticated } = require("../middleware/auth");

router.post("/getbalance",authenticated, getBalance);
router.post("/login", userLogin);



// router.post("/login", userLogin);


// router.post("/google", userGoogleLogin);
// router.post("/facebook", userFacebookLogin);


// router.get("/status", authenticated, status);
// router.get("/logout", authenticated, logout);



module.exports = router;
