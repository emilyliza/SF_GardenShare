'use strict';

module.exports = {
	app: {
		title: 'garden_share',
		description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
		keywords: 'MongoDB, Express, AngularJS, Node.js'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MEAN',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.css',

			],
			js: [
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js', 
				'public/lib/angular-cookies/angular-cookies.js', 
				'public/lib/angular-sanitize/angular-sanitize.js', 
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
				'https://maps.google.com/maps/api/js', 
				'public/lib/ngmap/build/scripts/ng-map.min.js',
				'public/lib/jquery/dist/jquery.min.js'

			]
		},
		css: [
			'public/modules/**/css/*.css',
			'public/modules/font-awesome/css/font-awesome.min.css'

		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/**/*.js',
			'public/modules/*/*.js'
			'public/modules/*/*[!tests]*/*.js',

		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};