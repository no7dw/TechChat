TESTS = $(shell find test -type f -name "*test.js")
TEST_TIMEOUT = 5000
MOCHA_REPORTER = spec
NPM_REGISTRY="--registry=https://r.cnpmjs.org/"

install:
	@npm install $(NPM_REGISTRY)

test:
	NODE_ENV=unit_test ./node_modules/.bin/mocha \
		$(TESTS)

coverage:
	NODE_ENV=TEST grunt coverage

test-travis:
	@NODE_ENV=TEST
		node_modules/.bin/istanbul cover --preserve-comments \
		node_modules/.bin/_mocha \
		    $(MOCHA_OPTS) \
		    $(TESTS)

.PHONY: install test coverage test-travis


