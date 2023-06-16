FROM node:10.17

LABEL maintainer="Justin D. Harris (https://github.com/juharris)"
LABEL org.label-schema.vendor="Microsoft"
LABEL org.label-schema.url="https://github.com/microsoft/0xDeCA10B/tree/main/demo"
LABEL org.label-schema.vcs-url="https://github.com/microsoft/0xDeCA10B/tree/main/demo"

WORKDIR /root/workspace/demo

RUN sed -i s/deb.debian.org/archive.debian.org/g /etc/apt/sources.list
RUN echo "deb http://security.debian.org/debian-security bullseye-security main contrib non-free" > /etc/apt/sources.list

RUN apt-get update && apt-get install

COPY setup.sh setup_libs.sh package.json yarn.lock ./
COPY client/package.json client/yarn.lock client/

# Avoid issues with pulling Git repos during the build.
RUN git config --global url."https://".insteadOf git://
RUN bash setup.sh

ENTRYPOINT [ "yarn", "client" ]
