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

###########################################################################
## Build Asset & Docker Images
###########################################################################

build-asset:
	make build-javascript
	make build-documentation

build-javascript:
	yarn run build-asset

build-documentation:
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
	sh ./etc/aws/deploy_ecs.sh ${name}