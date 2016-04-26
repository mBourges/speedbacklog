module.exports = function(env) {
    if(env == 'production') {
        require('newrelic');
    }
};