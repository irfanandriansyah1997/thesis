###########################################################################
## Docker Desktop Site Deploy
## @author: Irfan Andriansyah <irfanandriansyah10@gmail.com>
## @since: 2020.03.23
###########################################################################

FROM irfanandriansyah1997/design-system-thesis:production-base
LABEL maintainer="Irfan Andriansyah <irfan@99.co>"


COPY deploy/index.js ./
COPY deploy/documentation documentation

CMD [ "node", "index.js" ]

EXPOSE 8080