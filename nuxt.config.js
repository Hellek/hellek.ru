// import jsconfig from './jsconfig.json'

// console.log(jsconfig.compilerOptions)

export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: '123',
		htmlAttrs: { lang: 'ru' },
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
		],
	},
	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
	],
	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],
	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,
	// Nuxt.js use webpack-bundle-analyzer https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-build#analyze
	analyze: false,
	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		// https://go.nuxtjs.dev/stylelint
		'@nuxtjs/stylelint-module',
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
	],
	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],
	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
	},
	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		// extend(config) {
		// config.resolve.alias['~src'] = projectSrc
		// config.resolve.alias['~utils'] = path.join(projectSrc, 'utils')
		// }
	},
}

// import { resolve } from 'path'

/* export default {
	alias: {
		// ScssVariables: resolve(__dirname, 'assets/styles/variables.scss'),
		// Assets: resolve(__dirname, 'assets/'),
		// Static: resolve(__dirname, 'static/'),
		Images: resolve(__dirname, 'assets/images/'),
		// Styles: resolve(__dirname, 'assets/styles/'),
		// Components: resolve(__dirname, 'components/'),
		// Helpers: resolve(__dirname, 'helpers/'),
		// Mixins: resolve(__dirname, 'mixins/'),
		// Pages: resolve(__dirname, 'pages/'),
		// Plugins: resolve(__dirname, 'plugins/'),
		// Utils: resolve(__dirname, 'utils/'),
	},
	eslint: {
		fix: true,
	},
} */
