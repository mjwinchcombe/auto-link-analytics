module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      options: {
        files: [
          'src/**/*.js',
          'test/**/*.js',
          'test/**/*.html',
          'node_modules/jquery/dist/jquery.js',
          'node_modules/jasmine-jquery/**/*.js'
        ],
        browsers: ['Firefox'],
        frameworks: ['jasmine']
      },
      unit: {
        singleRun: true
      },
      ci: {
        singleRun: false
      }
    },
    uglify: {
      options: {
        compress: {
          drop_console: true,
        },
        mangle: true
      },
      dist: {
        files: {
          "dist/auto-link-analytics.min.js": ["src/**/*.js"]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['karma:unit']);
};
