###########################################################################
## Make File Configuration
## @author: Irfan Andriansyah <irfanandriansyah10@gmail.com>
## @since: 2020.03.23
###########################################################################


###########################################################################
## Initial Setup Dev
###########################################################################

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

###########################################################################
## Run Unit Testing & Linter
###########################################################################

init-test:
	yarn run lint
	yarn run test
	./node_modules/.bin/codecov --token=8de315f6-6f4a-4eea-a24a-d3e42af54287	

###########################################################################
## Build Asset & Docker Images
###########################################################################

build-asset:
	yarn run build-documentation-common
	yarn run build-documentation-desktop

build-docker-image:
	docker build -t irfanandriansyah1997/unikom-thesis:common-module.latest -f src/common/deploy/Dockerfile .
	docker build -t irfanandriansyah1997/unikom-thesis:common-module.${version} -f src/common/deploy/Dockerfile .
	docker build -t irfanandriansyah1997/unikom-thesis:desktop-module.latest -f src/desktop-site/deploy/Dockerfile .
	docker build -t irfanandriansyah1997/unikom-thesis:desktop-module.${version} -f src/desktop-site/deploy/Dockerfile .
	docker push irfanandriansyah1997/unikom-thesis:common-module.latest
	docker push irfanandriansyah1997/unikom-thesis:desktop-module.latest
	docker push irfanandriansyah1997/unikom-thesis:common-module.${version}
	docker push irfanandriansyah1997/unikom-thesis:desktop-module.${version}
