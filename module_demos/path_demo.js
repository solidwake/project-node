const path = require('path');

// Base file name
console.log(path.basename(__filename));
// path_demo.js

// Directory name
console.log(path.dirname(__filename));
// /Users/idris/Desktop/project-node/module_demos

// File extension
console.log(path.extname(__filename));
// .js

// Create path object
console.log(path.parse(__filename));
/* {
    root: '/',
    dir: '/Users/idris/Desktop/project-node/module_demos',
    base: 'path_demo.js',
    ext: '.js',
    name: 'path_demo'
  } */