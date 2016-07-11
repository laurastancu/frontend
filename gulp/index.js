var requireDir = require('require-dir');

// tasks
requireDir('./tasks', { recurse: true });

// runners
requireDir('./runners', { recurse: true });
