const fs = require('fs');

const handlers = {};

handlers.homeHandler = (payload, callback) => {
    const fileData = fs.readFileSync('public/home.html');
    callback(200, fileData.toString());
};

handlers.notFound = (payload, callback) => {
    const fileData = fs.readFileSync('public/404.html');
    callback(400, fileData.toString());
};

handlers.loginHandler = (payload, callback) => {
    callback(300, 'This feature is coming soon');
};

const router = {
    home: handlers.homeHandler,
    notFound: handlers.notFound,
    login: handlers.loginHandler,
};

module.exports = { router, handlers };