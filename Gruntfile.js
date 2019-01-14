module.exports = function(grunt) {

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),  /** Where the package file is that points to all the modules **/

		/** Sass **/
		sass: {
		  dev: {
		    options: {
		      style: 'expanded',

		    },
		    files: {
		      'wp-content/themes/<%= pkg.name %>/compiled/style-human.css': 'wp-content/themes/<%= pkg.name %>/scss/style.scss'
		  }
		},

		dist: {
			options: {
				style: 'compressed',
			},
			files: {
				'wp-content/themes/<%= pkg.name %>/style.css': 'wp-content/themes/<%= pkg.name %>/scss/style.scss'
			}
		}
	},
		/** Autoprefixer **/
	  	autoprefixer: {
		  	options: {
			  	map: true, /** This enables the sourcemap to pass through to the minified file */
			  	grid: true,
			  	browsers: [
			  	"Android 2.3",
                "Android >= 4",
                "Chrome >= 20",
                "Firefox >= 24",
                "Explorer >= 8",
                "iOS >= 6",
                "Opera >= 12",
                "Safari >= 6"]
		  	},
	  	// Prefix all files
	  	multiple_files: {
		  	expand: true,
		  	flatten: true,
		  	src: 'wp-content/themes/<%= pkg.name %>compiled/style.css',
		  	dest: ''
	  		}
	  	},

	  	/** Watch **/
		watch: {
			css: {
				files: '**/*.scss',  /** Whenever something happens to a file with a .scss extension, do the following task **/
				tasks: ['sass','autoprefixer']
			}
		}

	});

	/** Load the task runners **/

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default',['watch']);  /** Sets the default 'Grunt" task to watch **/
}