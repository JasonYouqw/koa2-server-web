FROM base-registry.zhonganinfo.com/env/node:8.11
ENV NPM_CONFIG_REGISTRY http://npm.zhonganinfo.com
ENV SASS_BINARY_SITE http://npm.zhonganinfo.com/node-mirrors/node-sass/
MAINTAINER youqingwei_2020
WORKDIR /root/app
COPY ["package.json", "./"]
RUN npm install
COPY . .
EXPOSE 8080
RUN npm run build
CMD ["npm","start"]
