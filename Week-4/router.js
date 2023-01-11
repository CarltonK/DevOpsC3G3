const handlers = {};

handlers.homeHandler = (payload, callback) => {
    // TODO: Replace with an actual HTML file
    callback(200, 'You have requested for the home page');
};

handlers.notFound = (payload, callback) => {
    // TODO: Replace with an actual HTML file
    callback(400, 'The resource you requested for is not available');
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