var allowCrossDomain = function (req, res, next) {
    // Website you wish to allow to connect
    var allowedOrigins = ['http://localhost:8100', 'http://192.168.56.1:8100'];
    var origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,jwt');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    //res.setHeader('Access-Control-Allow-Credentials', true);

    // intercept OPTIONS method
    if (req.method === 'OPTIONS') {
        res.status(200);
        res.send();
    }
    else {
        next();
    }
};

module.exports = allowCrossDomain;