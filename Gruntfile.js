module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {},
        sizes: [{
          name: 'small',
          width: 320,
          height: 240
        }, {
          name: 'large',
          width: 640
        }, {
          name: "large",
          width: 1024,
          suffix: "_x2",
          quality: 60
        }],
        files: [{
          expand: true,
          src: ['*.{jpg,gif,png}'],
          cwd: 'images/',
          dest: 'images/'
        }]
      }
    },

  });


  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('default', ['responsive_images']);
};
