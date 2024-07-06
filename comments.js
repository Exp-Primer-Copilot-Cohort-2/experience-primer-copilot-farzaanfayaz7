// Create web server
// Create a web server that listens to the port 3000, and returns the comments array in JSON format when the URL is /comments.

// The comments array is provided below:

const http = require('http');
const comments = [
  { id: 1, body: "Love this!", postId: 1 },
  { id: 2, body: "Super good", postId: 1 },
  { id: 3, body: "You are the best", postId: 2 },
  { id: 4, body: "Ramen is my fav food ever", postId: 2 },
  { id: 5, body: "Nice nice nice", postId: 3 }
];

const server = http.createServer((req, res) => {
  if (req.url === '/comments') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(comments));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(3000);
