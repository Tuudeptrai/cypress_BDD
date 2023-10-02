# FROM jenkins/jenkins:lts

# USER root

# RUN apt-get update && apt-get install -y \
#     apt-transport-https \
#     ca-certificates \
#     curl \
#     gnupg2 \
#     software-properties-common

# RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -
# RUN add-apt-repository \
#     "deb [arch=amd64] https://download.docker.com/linux/debian \
#     $(lsb_release -cs) \
#     stable"

# RUN apt-get update && apt-get install -y docker-ce-cli

# USER jenkins
FROM node:16-alpine3.16 as build
# ENV NODE_ENV=production
WORKDIR /app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY ./package*.json ./
# RUN npm install --production --silent && mv node_modules ../
RUN  npm install
RUN  npm install -g npm
RUN   npm install -g npx
RUN npx cypress run