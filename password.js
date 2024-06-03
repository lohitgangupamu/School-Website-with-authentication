// Setting up Passport.js for user authentication
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Route for user registration
app.post('/register', (req, res) => {
  // Create a new user using req.body data and save it to the database
  const newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      console.error(err);
      return res.render('register'); // Render a registration error page
    }
    passport.authenticate('local')(req, res, () => {
      res.redirect('/dashboard'); // Redirect to the user's dashboard upon successful registration
    });
  });
});

// Route for user login
app.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login',
}), (req, res) => {});

// Route for user logout
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});
