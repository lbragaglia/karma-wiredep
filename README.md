# karma-bower [![Build Status](https://travis-ci.org/just-boris/karma-bower.svg?branch=master)](https://travis-ci.org/just-boris/karma-bower)

> Loads bower dependencies into your test scope. 

If you want to have all of your production or development bower dependencies into your karma tests, such as `sinon` or `jasmine-jquery`, you can easily 
do it with this plugin and `bower`


## Simple example

`npm install karma-wiredep --save-dev`

Then add into your `karma.conf.js`

```js
module.exports = function(config) {
    config.set({
        frameworks: ['wiredep', 'jasmine'],
        
        //you can configure wiredep from here
        wiredep: {
            dependencies: true,    // default: true 
            devDependencies: true, // default: false 
            exclude: [ /jquery/, 'bower_components/modernizr/modernizr.js' ],
            overrides: { ... }
        }
    });
};
```

All the bower dependencies will be included. If any package is missing the `main` section in its `bower.json`, you can configure the section `overrides` for that package. 

Also note that plugin should be included in `frameworks` section *before* your test framework
(mocha or jasmine).

[bower]: http://bower.io
