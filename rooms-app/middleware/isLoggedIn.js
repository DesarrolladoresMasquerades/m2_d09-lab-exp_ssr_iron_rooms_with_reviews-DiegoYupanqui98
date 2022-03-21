module.exports = (req, res, next) => {
  // checks if the user is logged in when trying to access a specific page
  if (!req.session.user) {
    if(req.path !== "/") return res.redirect("/auth/login");
    else return res.render("index")

    //return res.redirect("/auth/login");
  }
  req.user = req.session.user;
  next();
};