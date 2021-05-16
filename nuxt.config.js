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
	},
}
