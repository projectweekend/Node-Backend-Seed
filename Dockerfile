FROM dockerfile/nodejs

COPY . /src
RUN cd /src; npm install
ADD . /src
WORKDIR /src

EXPOSE 3000
