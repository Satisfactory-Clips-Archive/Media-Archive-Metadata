lint: lint--eslint lint--tsc

lint--eslint:
	@echo "running eslint"
	@./node_modules/.bin/eslint --config=./eslint.config.mjs --ignore-pattern='*.mjs'

lint--tsc:
	@echo "checking typescript"
	@./node_modules/.bin/tsc --project ./tsconfig.app-check.json
