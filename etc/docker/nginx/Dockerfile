###########################################################################
## Docker Base Config Nginx
## @author: Irfan Andriansyah <irfanandriansyah10@gmail.com>
## @since: 2020.03.23
###########################################################################

FROM nginx:1.17.10-alpine
RUN mkdir -p /usr/src/thesis
WORKDIR /usr/src/thesis

RUN mkdir -p cache
RUN touch error.log
COPY etc/nginx/sites.conf .

