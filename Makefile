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

init-dev-env: init-dev
	docker-compose run apps npm rebuild node-sass

run-dev:
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
	yarn run build-asset
	yarn run build-documentation

build-docker:
	make build-docker-image name=${name} version=${version}
	make push-docker-image name=${name} version=${version}

push-docker-image:
	docker push irfanandriansyah1997/design-system-thesis:${name}.${version}

build-docker-image:
	docker build -t irfanandriansyah1997/design-system-thesis:${name}.${version} -f Dockerfile .

deploy:
	docker login -u ${username} -p ${password}
	make build-docker version=${version}
	etc/aws/deploy_ecs.sh ${name}