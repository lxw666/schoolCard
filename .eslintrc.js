module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
	},
	extends: ["plugin:vue/essential", "eslint:recommended"],
	parserOptions: {
		parser: "babel-eslint"
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? 1 : 0,//0 = off, 1 = warn, 2 = error
		"no-debugger": process.env.NODE_ENV === "production" ? 1 : 0,
		"quotes": [0, 'single'],
	},
	overrides: [{
		files: [
			"**/__tests__/*.{j,t}s?(x)",
			"**/tests/unit/**/*.spec.{j,t}s?(x)"
		],
		env: {
			jest: true
		}
	}],
};
