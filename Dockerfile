FROM dockerfile/nodejs

RUN mkdir /webapp_root
ADD . /webapp_root/
WORKDIR /webapp_root

EXPOSE 3000
