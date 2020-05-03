setup-dev: init-dev

init-dev:
	cp etc/git-hooks/pre-commit .git/hooks
	yarn install
	chmod +775 .git/hooks/pre-commit

run-dev:
	@if [ ! -e "etc/nginx/error.log" ];then touch etc/nginx/error.log ; fi
	docker-compose up

stop-dev:
	docker-compose down

build-asset:
	yarn run build-asset

build-documentation:
	yarn run build-documentation
