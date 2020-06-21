const express = require("express");
const router = express.Router();
const passport = require("passport");

//@desc Auth with Google
//@route GET /auth/google
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

//@desc Google Auth Callback
//@route Get /auth/google/callback

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

//@desc Logout user
//@route /auth/logout

router.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/");
});

module.exports = router;
