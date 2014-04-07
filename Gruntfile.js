module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		coffee: {
			glob_to_multiple: {
				expand: true,
//				flatten: true,
				cwd: 'public/coffee',
				src: ['**/*.coffee'],
				dest: 'public/js',
				ext: '.js'
			}
		},

		sass: {
			dist: {
				files: {
					'public/css/application.css': [ 'public/scss/*.scss' ]
				}
			}
		},

		requirejs: {
			compile: {
				options: {
					mainConfigFile: 'public/js/build.js',
					// папка где находятся все js файлы
					baseUrl: "public/js",
					// название файла запускающего приложение
					name: 'application',
					// вставить в выходящий файл и build.js
					include: ['build'],
					// выходящий минифицированный и конкатенированный файл готовые для продакшена
					out: "public/js/application.min.js"
				}
			}
		},


		watch: {
			coffee: {
				files: 'public/coffee/*.coffee',
				tasks: ['coffee', 'bower', 'requirejs', 'watch']
			},
			css: {
				files: 'src/sass/*.scss',
				tasks: ['sass']
			}
		},

		bower: {
			target: {
				rjsConfig: 'public/js/build.js'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-bower-requirejs');

	grunt.registerTask('default', ['coffee', 'sass', 'bower', 'requirejs', 'watch']);
};