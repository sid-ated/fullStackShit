const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function(app){
	app.use(createProxyMiddleware('/get_symptoms', {target: 'https://disease-pred.herokuapp.com'}));
}
