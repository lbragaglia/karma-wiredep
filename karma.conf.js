module.exports = function(config) {
    config.plugins.push(require('./index.js'));
    config.set({
        basePath: '',
        frameworks: ['wiredep', 'jasmine'],
        files: [
            'test/*.js'
        ],
        reporters: ['progress'],
        wiredep: {
            "overrides": {
                "package-without-main": {
                    "main": "dist/package-without-main.js"
                }
            }
        },

        browsers: ['Firefox', 'PhantomJS']
    });
};
