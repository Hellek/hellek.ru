module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: [
		'@nuxtjs',
		'plugin:nuxt/recommended',
	],
	rules: {
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true,
			},
		],
		indent: [
			'error',
			'tab',
		],
		'vue/html-indent': [
			'error',
			'tab',
			{},
		],
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'ignore',
			},
		],
		'vue/html-closing-bracket-spacing': [
			'error',
			{
				selfClosingTag: 'never',
			},
		],
	},
}
