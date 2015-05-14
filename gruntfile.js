module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		/**************************************
		 * Concat and Minify JavaScript files *
		 **************************************/
		uglify: {
			debugMine: {
				options: {
					wrap: true,
					sourceMap: true,
					mangle: false,
					banner: '/*\n * Copyright 2015 Jordan Roskelley\n */'
				},
				files: {
					'source/js/production.min.js':
					[
						'source/js/app/services/**.js',
						'source/js/app/filters/**.js',
						'source/js/app/controllers/**.js',
						'source/js/app/directives/**.js',
						'source/js/app/configs/**.js',
						'source/js/app/misc/**.js',
						'source/js/app/app.js',
					]
				}
			},
			debugVendor: {
				files: {
					'source/js/vendor.min.js':
					[
						'bower_components/jquery/dist/jquery.js',
						'bower_components/lodash/lodash.js',
						'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
						'bower_components/angular/angular.js',
						'bower_components/angular-route/angular-route.js',
						'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
						'bower_components/file-saver/FileSaver.js',
					]
				}
			}
		},
		/****************************************
		 * Copy static files into served folder *
		 ****************************************/
		copy: {
			debug: {
				cwd: 'bower_components/bootstrap-sass/assets/fonts/bootstrap',
				src: '**/*',
				dest: 'source/fonts',
				expand: true,
			},
		},
		/****************
		 * Compile SASS *
		 ****************/
		sass: {
			debug: {
				options: {
					style: 'compressed'
				},
				files: {
					'source/css/styles.min.css':
					['source/css/sass/styles.scss'],
				}
			}
		},
		/***********************
		 * Run a static server *
		 ***********************/
		connect: {
			server: {
				options: {
					base: ['source'],
				}
			}
		},
		/***************************
		 * Watch files for changes *
		 ***************************/
		watch: {
			//anything in the sass folder
			css: {
				files: ['source/css/sass/**'],
				tasks: ['sass:debug']
			},
			// watch html files
			html: {
				files: ['source/*.html', 'source/views/*.html']
			},
			// watch my javascript
			myscripts: {
				files: ['source/js/app/**'],
				tasks: ['uglify:debugMine'],
			},
			// turn on live reload
			options: {
				livereload: true,
				spawn: false
			},
			// watch vendor javascript
			vendorscripts: {
				files: ['source/js/vendor/**'],
				tasks: ['uglify:debugVendor'],
			}
		}
		/* Close comments *********************************************************/
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('debug',
						'Serves a test-able site',
						[
							'copy:debug',
							'uglify:debugMine',
							'uglify:debugVendor',
							'sass:debug',
							'connect:server',
							'watch',
						]);
};
