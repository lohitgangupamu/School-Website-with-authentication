// Route for creating a new blog post
app.get('/posts/new', (req, res) => {
    // Render a form for creating a new blog post
  });
  
  app.post('/posts', (req, res) => {
    // Create a new blog post using req.body data and save it to the database
    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      author: req.user, // Assuming user is authenticated and their data is available in req.user
      // Add publication date and optional tags/categories as needed
    });
  
    newPost.save((err) => {
      if (err) {
        console.error(err);
        return res.render('new_post'); // Render a post creation error page
      }
      res.redirect('/posts'); // Redirect to the list of all blog posts
    });
  });
  
  // Route for viewing all blog posts
  app.get('/posts', (req, res) => {
    // Fetch all blog posts from the database and render them
    Post.find({}, (err, posts) => {
      if (err) {
        console.error(err);
        return res.render('error'); // Render an error page
      }
      res.render('posts', { posts });
    });
  });
  