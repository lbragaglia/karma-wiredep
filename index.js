var wiredep = require('wiredep');

function createPattern(path) {
  return {pattern: path, included: true, served: true, watched: false};
}

importDependencies.$inject = ['config.files', 'config.wiredep'];
function importDependencies(files, options) {
  wiredep(options).js.slice().reverse().forEach(function(dep) {
    files.unshift(createPattern(dep));
  });
}

module.exports = {
  'framework:wiredep': ['factory', importDependencies]
};
