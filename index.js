var wiredep = require('wiredep');
var path    = require("path");

function createPattern(path) {
  return {pattern: path, included: true, served: true, watched: false};
}

importDependencies.$inject = ['config.files', 'config.wiredep', 'config.basePath'];
function importDependencies(files, options, basePath) {
  options.cwd = path.resolve(basePath, options.cwd || '');  // Relative paths resolve from Karma basePath
  wiredep(options).js.slice().reverse().forEach(function(dep) {
    files.unshift(createPattern(dep));
  });
}

module.exports = {
  'framework:wiredep': ['factory', importDependencies]
};
