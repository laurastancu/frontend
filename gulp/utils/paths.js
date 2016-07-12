module.exports = {
  src: {
    path: 'src/',
    components: 'src/components/',
    //jade: 'src/pages/',
    html: 'src/pages/',
    js: 'src/js/',
    less: 'src/styles/',
    img: 'src/img/',
    jade:'src/pages'
  },
  dist: {
    path: 'public/',
    html: 'public/html/',
    css: 'public/css/',
    img: 'public/img/',
    js: 'public/js/',
    fonts: 'public/fonts/'
  },
  bower: {
    path: 'bower_components/'
  },
  npm: {
    path: 'node_modules/'
  },
  components: {
    jade: 'src/components/*/',
    js: 'src/components/*/js/',
    less: 'src/components/*/less/'
  }
};
