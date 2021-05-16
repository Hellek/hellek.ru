// module.exports = require('./node_modules/element-ui-kit/stylelint.config.js')
module.exports = {
	extends: [
		'stylelint-config-standard',
	],
	// add your custom config here
	// https://stylelint.io/user-guide/configuration
	rules: {
		indentation: 'tab',
		linebreaks: 'unix',
	},
}

/* 'no-empty-first-line': true,
'selector-list-comma-newline-after': 'always-multi-line',
'declaration-block-trailing-semicolon': null,
'at-rule-no-unknown': [
	true,
	{
		ignoreAtRules: [
			'function',
			'if',
			'else',
			'each',
			'for',
			'include',
			'mixin',
		],
	},
],
*/
