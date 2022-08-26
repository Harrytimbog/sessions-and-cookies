exports.getLogin = (req, res, next) => {
  console.log(req.session.isLoggedIn);
  const isLoggedIn = req.get("Cookie").split(":")[0].trim().split("=")[1];
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  res.redirect("/");
};
