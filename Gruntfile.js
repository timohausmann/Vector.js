module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			dist: {
				files: {
					'Vector.min.js': 'Vector.js'
				}
			}
		},

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};