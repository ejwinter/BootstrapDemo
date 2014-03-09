module.exports = function(grunt) {
  var appPath = 'main/**/*.js';
  var testPath = 'specs/**/*.js';
  grunt.initConfig({
      karma: {
        unit: {
          configFile: 'karma.conf.js',
          runnerPort: 9999,
          browsers: ['Chrome']
        },
        continuous: {
          configFile: 'karma.conf.js',
          singleRun: true,
          browsers: ['PhantomJS']
        }
      },
      jshint: {
          all: [testPath, appPath],
          options: {
              curly: true
          }
      }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint', 'karma']);    
};