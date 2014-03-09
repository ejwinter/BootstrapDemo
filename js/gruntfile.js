module.exports = function(grunt) {
  var appPath = 'main/**/*.js';
  var testPath = 'specs/**/*.js';
  grunt.initConfig({
      jasmine : {
        src : 'main/**/*.js',
        specs : 'specs/**/*Spec.js',
        helpers : 'specs/helpers/*.js',
        template: require('grunt-template-jasmine-requirejs'),
        templateOptions: {
          requireConfigFile: "main/require.js"
        },
        timeout : 10000,
        junit : {
          output : 'junit/'
        },
        phantomjs : {
          'ignore-ssl-errors' : true
        }
      },
      jshint: {
          all: [testPath, appPath],
          options: {
              curly: true
          }
      },
      watch: {
          files: [testPath, appPath], 
          tasks: ['jshint','jasmine']
      }   
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'jasmine']);    
};