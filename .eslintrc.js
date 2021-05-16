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
		/*
		'vue/max-attributes-per-line': [
			'error',
			{
				singleline: 2,
			},
		],
		'max-len': 'off',
		'linebreak-style': [
			'error',
			'unix',
		],
		radix: [
			'error',
			'as-needed',
		],
		'func-names': 'off',
		'object-curly-newline': [
			'error',
			{
				ObjectPattern: {
					consistent: true,
				},
			},
		],
		'arrow-parens': [
			'error',
			'as-needed',
		],
		quotes: [
			'error',
			'single',
			{
				allowTemplateLiterals: true,
			},
		],
		semi: [
			'error',
			'never',
		],
		'no-param-reassign': [
			'error',
			{
				props: false,
			},
		],
		'no-plusplus': [
			'error',
			{
				allowForLoopAfterthoughts: true,
			},
		],
		'eol-last': [
			'warn',
			'never',
		],
		'newline-per-chained-call': [
			'error',
			{
				ignoreChainWithDepth: 4,
			},
		],
		'no-multiple-empty-lines': [
			'warn',
			{
				max: 2,
			},
		],
		'import/extensions': 'off',
		// TODO временный багфикс. Валит сборку, локально не воспроизводится
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',
		*/
	},
}
