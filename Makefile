setup-dev: init-dev

init-dev:
	cp etc/git-hooks/pre-commit .git/hooks
	yarn install
	chmod +775 .git/hooks/pre-commit

run-dev:
	yarn run storybook

build-asset:
	yarn run build-asset

build-documentation:
	yarn run build-documentation
